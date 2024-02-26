import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/3d/', // Set the base URL to '/3d/' to match your project's relative path
  build: {
    outDir: 'docs',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Path to your index.html file
      },
    },
    emptyOutDir: true, // Ensure the docs directory is emptied before building
  },
});