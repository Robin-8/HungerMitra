import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/server": {
        target: "http://localhost:4000", // where your json-server runs
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/server/, ""),
      },
    },
  },
});
