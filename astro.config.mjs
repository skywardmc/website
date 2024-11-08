import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://skywardmc.org",
	integrations: [sitemap()],
	redirects: {
		"/project/[...slug]": "/[...slug]",
	},
});
