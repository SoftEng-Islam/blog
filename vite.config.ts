import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuePugPlugin from "vue-pug-plugin";
import tailwindcss from "@tailwindcss/vite";

// import { VitePluginNode } from "vite-plugin-node";

// https://vite.dev/config/
export default defineConfig({
  base: "SoftEng.github.io",
  server: {
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: 3002,
  },
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          plugins: [vuePugPlugin],
        },
      },
    }),
    tailwindcss(),
  ],
});
