import { createFileRoute } from '@tanstack/react-router'
import { Reveal } from '#/components/Reveal'
import { RoleCard } from '#/components/RoleCard'
import { education, fullName, profile, roles, siteUrl, skills } from '#/content/cv'

const description = `Work history, skills and education of ${fullName}, ${profile.title.toLowerCase()}.`

export const Route = createFileRoute('/experience')({
  head: () => ({
    meta: [
      { title: `Experience | ${fullName}` },
      { name: 'description', content: description },
      { property: 'og:url', content: `${siteUrl}/experience` },
    ],
  }),
  component: Experience,
})

const sectionHeading = 'display text-3xl md:text-5xl print:text-xl'
const sectionGrid =
  'grid gap-x-10 gap-y-6 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:py-10 print:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] print:py-4'

function Experience() {
  return (
    <main className="px-(--gutter) pb-24 print:p-0">
      <h1 className="fit pt-6 md:pt-12 print:hidden">
        <span className="display -ml-[0.05em] block text-[11.9cqw]">Experience</span>
      </h1>

      <header className="hidden print:block">
        <p className="display text-4xl">{fullName}</p>
        <p className="mt-2 font-semibold">
          {profile.title}, {profile.location}. {profile.email}
        </p>
      </header>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-6 md:mt-12 print:mt-4">
        <p className="max-w-[52ch] text-xl/relaxed md:text-2xl/relaxed print:text-base">
          {profile.summary}
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="cursor-pointer bg-fg px-5 py-3 font-bold text-bg transition-colors hover:bg-mark hover:text-ink print:hidden"
        >
          Save as PDF
        </button>
      </div>

      <section className="mt-12 md:mt-20 print:mt-6">
        <h2 className="sr-only">Work history</h2>
        {roles.map((role) => (
          <RoleCard key={`${role.company}-${role.start}`} role={role} />
        ))}
      </section>

      <Reveal>
        <section className={sectionGrid}>
          <h2 className={sectionHeading}>Skills</h2>
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.name}>
                <dt className="font-extrabold">{group.name}</dt>
                <dd className="mt-1">{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      <Reveal>
        <section className={sectionGrid}>
          <h2 className={sectionHeading}>Education</h2>
          <ul className="space-y-4">
            {education.map((qualification) => (
              <li key={qualification.award}>
                <p className="text-xl font-extrabold print:text-base">{qualification.award}</p>
                <p>
                  {qualification.institution},{' '}
                  <span className="text-muted">
                    {qualification.start}–{qualification.end}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
      <div className="rule" />
    </main>
  )
}
