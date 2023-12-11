import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: resolve(__dirname, "../src/components/cube"),
      exclude: resolve(__dirname, "../src/components/cube/tests"),
      insertTypesEntry: true
    })],
  build: {
    lib: {
      formats:['es'],
      entry: resolve(__dirname, '../src/components/cube/index.tsx'),
      name: "CubeReactComponent",
      fileName: "cube-react-component"
    },
    sourcemap: true,
    copyPublicDir: false,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: "React",
        }
      }
    }
  }
});
