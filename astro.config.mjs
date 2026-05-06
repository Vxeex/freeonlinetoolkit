import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://freeonlinetoolkit.org',
  adapter: cloudflare(),
  integrations: [sitemap()],
});
