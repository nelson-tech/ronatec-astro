import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import prefetch from "@astrojs/prefetch"

// https://astro.build/config
export default defineConfig({
  image: { domains: ["assets.ronatec.us", "cdn.ronatec.us", "lanco-corp.com"] },
  integrations: [tailwind({ applyBaseStyles: true }), prefetch()],
})
