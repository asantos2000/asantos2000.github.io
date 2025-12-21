// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://adsantos.github.io',
  base: '/adsantos-blog',
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: ['python', 'typescript', 'gdscript', 'dart'],
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});