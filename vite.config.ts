import { defineConfig } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        // experience.html rather than experience/index.html, so Cloudflare serves /experience without a redirect
        autoSubfolderIndex: false,
        failOnError: true,
      },
      pages: [{ path: '/404' }],
    }),
    viteReact(),
  ],
})

export default config
