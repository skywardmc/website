import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
	site: "https://skywardmc.org",
	integrations: [sitemap(), mdx(), pagefind()],
	redirects: {
		"/project/adrenaline": "/adrenaline",
		"/project/additive": "/additive",
	},
	build: {
		target: "static",
	},
});
