import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '#/components/NotFound'
import { fullName } from '#/content/cv'

// Prerendered at /404 to produce 404.html, which Cloudflare serves for unknown paths
export const Route = createFileRoute('/$')({
  head: () => ({
    meta: [{ title: `Page not found | ${fullName}` }, { name: 'robots', content: 'noindex' }],
  }),
  component: NotFound,
})
