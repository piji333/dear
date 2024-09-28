import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import netlify from "@astrojs/netlify";
import paraglide from "@inlang/paraglide-astro"

export default defineConfig({
  // Use astro's i18n routing for deciding which language to use
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
  site: "https://phuocnghi.live/wedding-invitation",
  integrations: [
    relativeLinks(),
    paraglide({
      // recommended settings
      project: "./project.inlang",
      outdir: "./src/paraglide", //where your files should be
    }),
  ],
  output: "server",
  adapter: netlify(),
});
