// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://a2not.github.io",
	integrations: [
		mdx(),
		sitemap(),
		tailwind(),
		react(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
});
