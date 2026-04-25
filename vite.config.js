// ======================= NOTES ==================================
/**
 * @CONFIG Vite
 * Configuracion de Vite con React, Tailwind y alias absoluto `@`.
 *
 * - Registra plugin de React y Tailwind
 * - Define alias `@` hacia `src` para imports limpios
 * - Mantiene servidor dev compatible con localhost e IP de red
 */
// ======================= IMPORTS =========================================
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// ======================= VITE CONFIG =====================================
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5600,
    strictPort: true,
    open: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
    hmr: {
      overlay: true,
    },
  },
})
