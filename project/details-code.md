# Ejemplos de código

Reglas y decisiones → `details-arquitectura.md`  
Carpetas del repo → `docs.md`

---

## 1. Flujo mínimo (formatear JSON)

```javascript
// application/FormatJsonUseCase.js
export function FormatJsonUseCase(content) {
  return JSON.stringify(JSON.parse(content), null, 2);
}

// ui/hooks/useFormatJson.js
export function useFormatJson() {
  const format = (content) => FormatJsonUseCase(content);
  return { format };
}

// ui/components/JsonEditor.jsx
export function JsonEditor({ onFormat }) {
  return <button onClick={() => onFormat('{"a":1}')}>Formatear</button>;
}

// ui/pages/WorkspacePage.jsx
export function WorkspacePage() {
  const { format } = useFormatJson();
  return <JsonEditor onFormat={format} />;
}
```

---

## 2. domain

### Entidad con reglas

```javascript
// domain/JsonDocument.js
export function createJsonDocument({ id, name, content, createdAt }) {
  if (!id) throw new Error("El documento necesita un identificador");
  if (!name?.trim()) throw new Error("El nombre del documento es obligatorio");
  JSON.parse(content);
  return { id, name: name.trim(), content, createdAt };
}
```

### Contrato (repositorio)

```javascript
// domain/DocumentRepository.js
export const DocumentRepository = {
  save(document) {
    throw new Error("Método save no implementado");
  },
  findAll() {
    throw new Error("Método findAll no implementado");
  },
  findById(id) {
    throw new Error("Método findById no implementado");
  },
  deleteById(id) {
    throw new Error("Método deleteById no implementado");
  },
};
```

### ❌ Innecesario (solo envuelve JSON.parse)

```javascript
export function ParseJsonDomainService(content) {
  return JSON.parse(content);
}
```

---

## 3. application

### Simple (sin domain ni infrastructure)

```javascript
// application/FormatJsonUseCase.js
export function FormatJsonUseCase(content) {
  const parsed = JSON.parse(content);
  return JSON.stringify(parsed, null, 2);
}
```

### Con domain y repositorio

```javascript
// application/SaveDocumentUseCase.js
import { createJsonDocument } from "../domain/JsonDocument";

export function createSaveDocumentUseCase(documentRepository) {
  return function SaveDocumentUseCase(input) {
    const document = createJsonDocument(input);
    documentRepository.save(document);
    return document;
  };
}
```

```javascript
// application/GetDocumentsUseCase.js
export function createGetDocumentsUseCase(documentRepository) {
  return function GetDocumentsUseCase() {
    return documentRepository.findAll();
  };
}
```

---

## 4. infrastructure

### localStorage

```javascript
// infrastructure/storage/LocalStorageDocumentRepository.js
export function createLocalStorageDocumentRepository(storage) {
  const storageKey = "jsonlens.documents";

  function findAll() {
    const storedValue = storage.getItem(storageKey);
    return storedValue ? JSON.parse(storedValue) : [];
  }

  function save(document) {
    const documents = findAll();
    const existingIndex = documents.findIndex((item) => item.id === document.id);
    if (existingIndex >= 0) documents[existingIndex] = document;
    else documents.push(document);
    storage.setItem(storageKey, JSON.stringify(documents));
  }

  function findById(id) {
    return findAll().find((document) => document.id === id) ?? null;
  }

  function deleteById(id) {
    const documents = findAll().filter((document) => document.id !== id);
    storage.setItem(storageKey, JSON.stringify(documents));
  }

  return { save, findAll, findById, deleteById };
}
```

### Portapapeles

```javascript
// infrastructure/browser/ClipboardService.js
export function createClipboardService(clipboard) {
  return {
    copy(text) {
      return clipboard.writeText(text);
    },
  };
}
```

### container.js (wiring)

```javascript
// infrastructure/container.js
import { createSaveDocumentUseCase } from "../application/SaveDocumentUseCase";
import { createGetDocumentsUseCase } from "../application/GetDocumentsUseCase";
import { createLocalStorageDocumentRepository } from "./storage/LocalStorageDocumentRepository";

const documentRepository = createLocalStorageDocumentRepository(window.localStorage);

export const saveDocumentUseCase = createSaveDocumentUseCase(documentRepository);
export const getDocumentsUseCase = createGetDocumentsUseCase(documentRepository);
```

---

## 5. ui

### Component (tonto)

```javascript
// ui/components/FormatButton.jsx
export function FormatButton({ onFormat, disabled }) {
  return (
    <button type="button" onClick={onFormat} disabled={disabled}>
      Formatear
    </button>
  );
}
```

### Hook

```javascript
// ui/hooks/useFormatJson.js
import { useState } from "react";
import { FormatJsonUseCase } from "../../application/FormatJsonUseCase";

export function useFormatJson() {
  const [content, setContent] = useState("");
  const [formattedContent, setFormattedContent] = useState("");
  const [error, setError] = useState(null);

  function format() {
    try {
      const result = FormatJsonUseCase(content);
      setFormattedContent(result);
      setError(null);
    } catch {
      setFormattedContent("");
      setError("El contenido introducido no es un JSON válido");
    }
  }

  return { content, formattedContent, error, setContent, format };
}
```

### Page delgada

```javascript
// ui/pages/FormatterPage.jsx
import { JsonEditor } from "../components/JsonEditor";
import { useFormatJson } from "../hooks/useFormatJson";

export function FormatterPage() {
  const { content, formattedContent, error, setContent, format } = useFormatJson();

  return (
    <main>
      <h1>Formatear JSON</h1>
      <JsonEditor
        content={content}
        formattedContent={formattedContent}
        error={error}
        onContentChange={setContent}
        onFormat={format}
      />
    </main>
  );
}
```

### JsonEditor completo

```javascript
// ui/components/JsonEditor.jsx
export function JsonEditor({
  content,
  formattedContent,
  error,
  onContentChange,
  onFormat,
}) {
  return (
    <section>
      <textarea
        value={content}
        onChange={(event) => onContentChange(event.target.value)}
        placeholder="Introduce un JSON"
      />
      <button type="button" onClick={onFormat}>
        Formatear
      </button>
      {error && <p role="alert">{error}</p>}
      <pre>{formattedContent}</pre>
    </section>
  );
}
```

### ❌ Mal: todo mezclado en la page

```javascript
function WorkspacePage() {
  function saveDocument() {
    const parsed = JSON.parse(content);
    if (!name.trim()) throw new Error("Nombre obligatorio");
    const documents = JSON.parse(localStorage.getItem("documents") ?? "[]");
    documents.push({ name, content: JSON.stringify(parsed) });
    localStorage.setItem("documents", JSON.stringify(documents));
  }
}
```

---

## 6. Hook con container (documentos)

```javascript
// ui/hooks/useDocuments.js
import { useEffect, useState } from "react";
import { getDocumentsUseCase, saveDocumentUseCase } from "../../infrastructure/container";

export function useDocuments() {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  function loadDocuments() {
    setDocuments(getDocumentsUseCase());
  }

  function saveDocument(input) {
    try {
      saveDocumentUseCase(input);
      loadDocuments();
      setError(null);
    } catch (saveError) {
      setError(saveError.message);
    }
  }

  useEffect(() => {
    loadDocuments();
  }, []);

  return { documents, error, saveDocument };
}
```

```javascript
// ui/pages/DocumentsPage.jsx
import { DocumentList } from "../components/DocumentList";
import { SaveDocumentForm } from "../components/SaveDocumentForm";
import { useDocuments } from "../hooks/useDocuments";

export function DocumentsPage() {
  const { documents, error, saveDocument } = useDocuments();

  return (
    <main>
      <h1>Documentos</h1>
      <SaveDocumentForm onSave={saveDocument} />
      {error && <p role="alert">{error}</p>}
      <DocumentList documents={documents} />
    </main>
  );
}
```

---

## 7. Features por complejidad (árboles)

### Formatear — application + ui

```text
modules/formatter/
├── application/
│   └── FormatJsonUseCase.js
└── ui/
    ├── hooks/useFormatJson.js
    ├── components/JsonEditor.jsx
    └── pages/FormatterPage.jsx
```

### Guardar documentos — 4 capas

```text
modules/documents/
├── domain/
│   ├── JsonDocument.js
│   └── DocumentRepository.js
├── application/
│   ├── SaveDocumentUseCase.js
│   └── GetDocumentsUseCase.js
├── infrastructure/
│   ├── storage/LocalStorageDocumentRepository.js
│   └── container.js
└── ui/
    ├── hooks/useDocuments.js
    ├── components/SaveDocumentForm.jsx
    ├── components/DocumentList.jsx
    └── pages/DocumentsPage.jsx
```

### Modal — solo ui

```javascript
const [isOpen, setIsOpen] = useState(false);
```

### Portapapeles — application + infrastructure + ui

```text
modules/clipboard/
├── application/CopyJsonUseCase.js
├── infrastructure/ClipboardService.js
└── ui/
    ├── hooks/useCopyJson.js
    └── components/CopyButton.jsx
```

---

## 8. Router (público / privado)

```javascript
<Route path="/login" element={<LoginPage />} />
<Route
  path="/documents"
  element={
    <PrivateRoute>
      <DocumentsPage />
    </PrivateRoute>
  }
/>
```

---

## 9. Page delgada (referencia)

```javascript
// ui/pages/WorkspacePage.jsx
export function WorkspacePage() {
  const { format, error } = useFormatJson();
  return <JsonEditor onFormat={format} error={error} />;
}
```
