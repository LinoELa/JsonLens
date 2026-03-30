import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5600,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5700',
        changeOrigin: true,
      },
    },
  },
})
