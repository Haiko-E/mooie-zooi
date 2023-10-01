import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: 'gwghkra8',
      dataset: 'develop',
      apiVersion: '2023-08-17',
      useCdn: true,
    }),
  ],
});
