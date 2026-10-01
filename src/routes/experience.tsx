import { createFileRoute } from '@tanstack/react-router'
import { useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { Reveal } from '#/components/Reveal'
import { RoleCard } from '#/components/RoleCard'
import { fullName, profile, roles, siteUrl, skills } from '#/content/cv'

const description = `Work history and skills of ${fullName}, ${profile.title.toLowerCase()}.`

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
  'grid gap-x-10 gap-y-6 py-6 md:grid-cols-[15rem_minmax(0,1fr)] md:py-10 print:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] print:py-4'

function useIsBelow(
  target: RefObject<Element | null>,
  obstacle: RefObject<Element | null>,
) {
  const [isBelow, setIsBelow] = useState(false)

  useEffect(() => {
    const update = () => {
      if (!target.current || !obstacle.current) return
      setIsBelow(
        obstacle.current.getBoundingClientRect().bottom <=
          target.current.getBoundingClientRect().top,
      )
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [target, obstacle])

  return isBelow
}

function Experience() {
  const introRef = useRef<HTMLDivElement>(null)
  const scrollCueRef = useRef<SVGSVGElement>(null)
  const rolesRef = useRef<HTMLElement>(null)
  // Same viewport margin as Reveal, so the cue goes as the first role starts to animate in
  const rolesInView = useInView(rolesRef, { once: true, margin: '0px 0px -12% 0px' })
  const scrollCueIsClear = useIsBelow(scrollCueRef, introRef)
  const showScrollCue = scrollCueIsClear && !rolesInView

  return (
    <main className="px-(--gutter) pb-24 print:p-0">
      <h1 className="fit pt-6 md:pt-12 print:hidden">
        <span className="display page-title block">Experience</span>
      </h1>

      <header className="hidden print:block">
        <p className="display text-4xl">{fullName}</p>
        <p className="mt-2 font-semibold">
          {profile.title}, {profile.location}. {profile.email}
        </p>
      </header>

      <div
        ref={introRef}
        className="mt-8 flex flex-wrap items-start justify-between gap-6 md:mt-12 print:mt-4"
      >
        <div className="max-w-[60ch] space-y-4 text-lg/relaxed md:text-xl/relaxed print:space-y-2 print:text-base">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="cursor-pointer border-4 border-fg bg-fg px-5 py-3 font-bold text-bg transition-colors hover:bg-bg hover:text-fg print:hidden"
        >
          Save as PDF
        </button>
      </div>

      <svg
        ref={scrollCueRef}
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className={`scroll-cue pointer-events-none fixed bottom-6 left-(--gutter) hidden size-10 transition-opacity duration-300 md:block print:hidden ${showScrollCue ? '' : 'opacity-0'}`}
      >
        <path d="M4 8l8 8 8-8" />
      </svg>

      <section ref={rolesRef} className="mt-12 md:mt-20 print:mt-6">
        <h2 className="sr-only">Work history</h2>
        {roles.map((role) => (
          <RoleCard key={`${role.company}-${role.startYear}`} role={role} />
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
      <div className="rule" />
    </main>
  )
}
