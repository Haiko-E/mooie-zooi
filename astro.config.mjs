import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { loadEnv } from 'vite';
import sanity from 'astro-sanity';

const { SANITY_DATASET } = loadEnv(process.env.NODE_ENV, process.cwd(), '');
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
      dataset: SANITY_DATASET,
      apiVersion: '2023-08-17',
      useCdn: true,
    }),
  ],
});
