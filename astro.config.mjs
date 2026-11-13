import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';
import react from "@astrojs/react";

// https://astro.build/config
// Static output: no serverless functions, so the Vercel Node.js runtime
// version only matters for the build step (set it in Project Settings).
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  adapter: vercel(),
});
