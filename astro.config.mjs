import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // 1. Aggiungi Tailwind tramite la sua integrazione ufficiale
  integrations: [tailwind()],

  // 2. Aggiungi le impostazioni per GitHub Pages
  site: 'https://travy333.github.io',
  base: '/',
});