import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://freeonlinetoolkit.org',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [sitemap({
    filter: (page) => !page.includes('/404'),
  })],
});
