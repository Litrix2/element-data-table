import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import dts from 'vite-plugin-dts';
import elementPlus from 'unplugin-element-plus/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      include: ['./lib'],
      rollupTypes: true,
    }),
    elementPlus({}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./lib', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: './lib/index.ts',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
    },
  },
});
