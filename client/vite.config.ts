import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'gizdo.ru',         // Основной домен
      'api.gizdo.ru',     // Бэкенд (если обращаетесь через поддомен)
      'localhost'         // Локальная разработка
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false
      }
    }
  }
})