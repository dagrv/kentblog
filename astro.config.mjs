import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://astro-blog-cip.netlify.app',
  integrations: [icon(), sitemap(), tailwind()],
});