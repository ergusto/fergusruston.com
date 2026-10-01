import { Link, createFileRoute } from '@tanstack/react-router'
import { careerStart, profile, siteUrl } from '#/content/cv'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ property: 'og:url', content: siteUrl }],
  }),
  component: Home,
})

function Home() {
  return (
    <main className="px-(--gutter) pb-(--gutter)">
      <h1 className="fit pt-2">
        <span className="display name block">{profile.firstName}</span>
        <span className="display name block" style={{ animationDelay: '380ms' }}>
          {profile.lastName}
        </span>
      </h1>

      <p className="mt-8 max-w-[26ch] text-2xl/snug font-semibold md:mt-12 md:text-4xl/tight">
        {profile.pitch}
      </p>

      <nav aria-label="Sections" className="mt-12 md:mt-20">
        <SectionLink to="/experience" label="Experience" detail={`${careerStart} to now`} />
        <SectionLink to="/contact" label="Contact" detail={profile.email} />
        <div className="rule" />
      </nav>
    </main>
  )
}

function SectionLink({
  to,
  label,
  detail,
}: {
  to: '/experience' | '/contact'
  label: string
  detail: string
}) {
  return (
    <Link to={to} className="group block">
      <div className="rule" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 transition-[padding,background-color,color] duration-200 group-hover:bg-ink group-hover:px-4 group-hover:text-signal group-focus-visible:bg-ink group-focus-visible:px-4 group-focus-visible:text-signal md:py-6">
        <span className="display text-3xl md:text-6xl">{label}</span>
        <span className="text-lg font-semibold md:text-xl">{detail}</span>
      </div>
    </Link>
  )
}
