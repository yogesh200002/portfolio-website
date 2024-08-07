import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), svelte(), mdx()],
	vite: {
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
	},
});
