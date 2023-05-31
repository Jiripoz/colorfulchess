// vite.config.ts
import { crx } from "file:///E:/python/chess/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import { svelte } from "file:///E:/python/chess/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js";
import { resolve } from "node:path";
import { defineConfig } from "file:///E:/python/chess/node_modules/vite/dist/node/index.js";

// manifest.json
var manifest_default = {
  name: "chess",
  description: "chess",
  version: "1.0",
  manifest_version: 3,
  icons: {
    "16": "src/assets/icons/get_started16.png",
    "32": "src/assets/icons/get_started32.png",
    "48": "src/assets/icons/get_started48.png",
    "128": "src/assets/icons/get_started128.png"
  },
  content_scripts: [
    {
      matches: ["https://*/*"],
      js: ["src/content/index.ts"]
    }
  ],
  background: {
    service_worker: "src/background/background.ts"
  },
  options_ui: {
    page: "src/options/options.html",
    open_in_tab: false
  },
  action: {
    default_popup: "src/popup/popup.html",
    default_icon: {
      "16": "src/assets/icons/get_started16.png",
      "32": "src/assets/icons/get_started32.png",
      "48": "src/assets/icons/get_started48.png",
      "128": "src/assets/icons/get_started128.png"
    }
  },
  permissions: ["storage", "tabs"]
};

// vite.config.ts
var __vite_injected_original_dirname = "E:\\python\\chess";
var srcDir = resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig({
  build: {
    minify: false
  },
  plugins: [svelte(), crx({ manifest: manifest_default })],
  resolve: {
    alias: {
      src: srcDir
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxweXRob25cXFxcY2hlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHB5dGhvblxcXFxjaGVzc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovcHl0aG9uL2NoZXNzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgY3J4IH0gZnJvbSBcIkBjcnhqcy92aXRlLXBsdWdpblwiO1xyXG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tIFwiQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZVwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IG1hbmlmZXN0IGZyb20gXCIuL21hbmlmZXN0Lmpzb25cIjtcclxuXHJcbmNvbnN0IHNyY0RpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIG1pbmlmeTogZmFsc2UsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbc3ZlbHRlKCksIGNyeCh7IG1hbmlmZXN0IH0pXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBzcmM6IHNyY0RpcixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcU8sU0FBUyxXQUFXO0FBQ3pQLFNBQVMsY0FBYztBQUN2QixTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIN0IsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxTQUFTLFFBQVEsa0NBQVcsS0FBSztBQUd2QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsMkJBQVMsQ0FBQyxDQUFDO0FBQUEsRUFDckMsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
