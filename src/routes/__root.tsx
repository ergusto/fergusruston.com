import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

import { NotFound } from '#/components/NotFound'
import { SiteNav } from '#/components/SiteNav'
import { fullName, profile, siteUrl } from '#/content/cv'
import archivoFont from '@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2?url'
import appCss from '../styles.css?url'

const revealFallback =
  '[data-reveal],[data-reveal]>*{opacity:1!important;transform:none!important}'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${fullName}, ${profile.title.toLowerCase()}` },
      { name: 'description', content: profile.pitch },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: fullName },
      { property: 'og:image', content: `${siteUrl}/og.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'theme-color', content: '#1e3a9e' },
    ],
    links: [
      // Without the preload, headings first paint in the fallback font and jump when Archivo arrives
      { rel: 'preload', as: 'font', type: 'font/woff2', href: archivoFont, crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <noscript>
          <style>{revealFallback}</style>
        </noscript>
      </head>
      <body className="min-h-dvh">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <SiteNav />
      <Outlet />
    </MotionConfig>
  )
}
