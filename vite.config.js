import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "happy-dom",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
	  @import "src/styles/global/_variables.scss";
	  @import "src/styles/global/_mixins.scss";
	`,
      },
    },
  },
});

