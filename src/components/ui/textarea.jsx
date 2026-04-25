import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, onKeyDown, ...props }) {
  const handleKeyDown = React.useCallback(
    (event) => {
      const isSubmitShortcut =
        (event.ctrlKey || event.metaKey) && event.key === "Enter";

      if (isSubmitShortcut) {
        const form = event.currentTarget.form;
        if (form) {
          event.preventDefault();

          if (typeof form.requestSubmit === "function") {
            form.requestSubmit();
          } else {
            form.dispatchEvent(
              new Event("submit", { bubbles: true, cancelable: true }),
            );
          }
        }
      }

      if (typeof onKeyDown === "function") {
        onKeyDown(event);
      }
    },
    [onKeyDown],
  );

  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className,
      )}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
}

export { Textarea };
