import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useLocation,
} from '@tanstack/react-router'
import { MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

import { NotFound } from '#/components/NotFound'
import { PageTransition } from '#/components/PageTransition'
import { SiteNav } from '#/components/SiteNav'
import { fullName, profile, siteUrl } from '#/content/cv'
import appCss from '../styles.css?url'

type Theme = 'paper' | 'signal' | 'ink'

const pageThemes: Record<string, Theme> = {
  '/': 'signal',
  '/contact': 'ink',
}

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
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: ReactNode }) {
  const pathname = useLocation({ select: (location) => location.pathname })

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <noscript>
          <style>{revealFallback}</style>
        </noscript>
      </head>
      <body data-theme={pageThemes[pathname] ?? 'paper'} className="min-h-dvh">
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
      <PageTransition />
    </MotionConfig>
  )
}
