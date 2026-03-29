import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simcast.dev',
  integrations: [sitemap()],
});
