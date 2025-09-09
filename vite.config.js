import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Цей плагін виправляє завантаження сторінки /admin/ на сервері розробки
    {
      name: 'admin-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/admin' || req.url === '/admin/') {
            req.url = '/admin/index.html';
          }
          next();
        });
      },
    },
  ],
})