import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // TanStack Start server configuration
    server: { entry: "server" },
  },
});
