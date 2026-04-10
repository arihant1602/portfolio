import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Performance Budget: three.js chunk < 600kb gzipped
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          react: ['react', 'react-dom'],
          gsap: ['gsap'],
        },
      },
    },
  },
});
