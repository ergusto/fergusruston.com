import net from 'node:net'
import { defineConfig } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { siteUrl } from './src/content/cv'

// The prerender server listens on IPv6 only. Node gives up on an IPv6 connection after 250ms
// and falls back to IPv4, which is refused, so a busy machine fails the build at random.
net.setDefaultAutoSelectFamilyAttemptTimeout(2000)

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
        // The crawler follows the PDF download links; they are files, not pages
        filter: ({ path }) => !path.endsWith('.pdf'),
      },
      pages: [
        { path: '/404', sitemap: { exclude: true } },
        // Crawled from the download links; kept out of the sitemap so search results point at the pages
        { path: '/Fergus-Ruston-CV.pdf', sitemap: { exclude: true } },
        { path: '/Fergus-Ruston-CV-Summary.pdf', sitemap: { exclude: true } },
      ],
      sitemap: { host: siteUrl },
    }),
    viteReact(),
  ],
})

export default config
