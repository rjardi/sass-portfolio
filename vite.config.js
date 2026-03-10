import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sass-portfolio/',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
