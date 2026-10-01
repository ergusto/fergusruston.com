import { createFileRoute } from '@tanstack/react-router'
import { contactLinks, fullName, profile, siteUrl } from '#/content/cv'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: `Contact | ${fullName}` },
      { name: 'description', content: `Email and links for ${fullName}.` },
      { property: 'og:url', content: `${siteUrl}/contact` },
    ],
  }),
  component: Contact,
})

function Contact() {
  return (
    <main className="px-(--gutter) pb-24">
      <h1 className="display pt-6 text-3xl md:pt-12 md:text-5xl">Contact</h1>
      <p className="mt-4 max-w-[40ch] text-xl md:text-2xl">
        Email is the quickest way to reach me.
      </p>

      <div className="fit mt-10 md:mt-16">
        <a
          href={`mailto:${profile.email}`}
          className="email block text-mark transition-colors hover:bg-mark hover:text-ink"
        >
          {profile.email}
        </a>
      </div>

      <ul className="mt-16 md:mt-24">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} rel="me" className="group block">
              <div className="rule" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 transition-[padding,background-color,color] duration-200 group-hover:bg-mark group-hover:px-4 group-hover:text-ink group-focus-visible:bg-mark group-focus-visible:px-4 group-focus-visible:text-ink md:py-6">
                <span className="display text-3xl md:text-5xl">{link.label}</span>
                <span className="text-lg font-semibold md:text-xl">{link.handle}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="rule" />
    </main>
  )
}
