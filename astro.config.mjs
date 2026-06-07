// astro.config.mjs
import { defineConfig } from "astro/config";

// [REPLACE] If deploying to https://username.github.io/repo-name/
// set base: "/repo-name"
// If using a custom domain (devopsuniverse.cloud), leave base: "/"
export default defineConfig({
  site: "https://www.devopsuniverse.cloud",
  base: "/",
  output: "static",
  integrations: [],  // add @astrojs/sitemap here once installed
});
