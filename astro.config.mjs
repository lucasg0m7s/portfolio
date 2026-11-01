// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Domínio público fixo: a variável de produção da Vercel aponta para o domínio gerado, não para o apelido.
const site = process.env.SITE_URL ?? "https://lucasgomes-portfolio.vercel.app";

export default defineConfig({
  site,
  trailingSlash: "never",
  integrations: [react(), mdx(), sitemap({ filter: (page) => !page.includes("/404") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
