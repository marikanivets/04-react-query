import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api-tmdb': {
        target: 'https://themoviedb.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-tmdb/, ''),
      },
    },
  },
});
