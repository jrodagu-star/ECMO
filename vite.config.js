import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function resolveBase() {
  const raw = process.env.VITE_BASE_PATH
  if (raw == null || raw === '') return '/'
  return raw.endsWith('/') ? raw : `${raw}/`
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react(), tailwindcss()],
})
