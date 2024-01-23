import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@monorepo/lit-component': path.resolve(__dirname, '../src')
    }
  }
});