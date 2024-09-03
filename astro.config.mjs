import { defineConfig } from 'astro/config';

import relativeLinks from "astro-relative-links";

export default defineConfig({
  site: 'https://piji333.github.io/dear',
  integrations: [relativeLinks()],
  output: "server",
});