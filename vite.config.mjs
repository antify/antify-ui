import {defineConfig} from "vite";
import {resolve} from "path";
import vue from "@vitejs/plugin-vue";
import {viteStaticCopy} from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "AntifyUi",
      fileName: "antify-ui"
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      },
    }
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: './tailwind.config.js',
          dest: './'
        }
      ]
    })
  ],
});
