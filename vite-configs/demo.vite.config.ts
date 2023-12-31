import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  root: resolve(__dirname, ".."),
   plugins: [react()],
  build: {
    outDir: "demo"
  },
  base:"/cube-react-component/demo"
});