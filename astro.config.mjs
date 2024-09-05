import { defineConfig } from 'astro/config';

import relativeLinks from "astro-relative-links";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: 'https://phuocnghi.live/wedding-invitation',
  integrations: [relativeLinks()],
  output: "server",
  adapter: netlify(),
});