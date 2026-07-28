import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import { visit } from "unist-util-visit";

export default defineConfig({
	site: "https://skywardmc.org",
	image: {
		layout: "full-width",
		remotePatterns: [
			{ protocol: "https", hostname: "githubusercontent.com" },
			{ protocol: "https", hostname: "**.githubusercontent.com" },
			{ protocol: "https", hostname: "modrinth.com" },
			{ protocol: "https", hostname: "**.modrinth.com" },
		],
	},
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [
			() => (tree) =>
				visit(tree, "element", (node, index, parent) => {
					if (node.tagName === "table" && parent) {
						parent.children[index] = {
							type: "element",
							tagName: "div",
							properties: { className: ["overflow-x-auto"] },
							children: [node],
						};
					}
				}),
		],
	},
	integrations: [
		sitemap(),
		expressiveCode({
			themes: ["dracula", "catppuccin-latte"],
		}),
		icon(),
		mdx(),
		pagefind(),
	],
	redirects: {
		"/discord": "https://discord.gg/36Tv44cYte",
		"/matrix": "https://matrix.to/#/#skywardmc:skywardmc.org",
		"/project/adrenaline": "/adrenaline",
		"/project/additive": "/additive",
	},
});
