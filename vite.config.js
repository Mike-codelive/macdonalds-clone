import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import esLint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    esLint(),
  ],
});
