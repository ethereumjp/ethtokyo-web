import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const entry = "./app/server.ts";
const basePlugins = [tailwindcss(), tsconfigPaths()];

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["./app/client.ts", "./app/style.css"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name]-[hash].[ext]",
          },
        },
      },
      plugins: [...basePlugins, client()],
    };
  } else {
    return {
      build: {
        emptyOutDir: false,
      },
      plugins: [...basePlugins, honox(), ssg({ entry })],
    };
  }
});
