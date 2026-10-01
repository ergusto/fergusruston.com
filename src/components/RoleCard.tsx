import { Reveal } from '#/components/Reveal'
import type { Role } from '#/content/cv'

export function RoleCard({ role }: { role: Role }) {
  return (
    <Reveal>
      <article className="grid gap-x-10 gap-y-4 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:py-10 print:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] print:py-4">
        <p className="display text-4xl md:text-5xl lg:text-6xl print:text-xl">
          {role.start}–{role.end}
        </p>
        <div>
          <h3 className="text-2xl/tight font-extrabold md:text-3xl/tight print:text-lg">
            {role.title}
          </h3>
          <p className="mt-1 text-lg font-semibold">
            {role.company}, <span className="text-muted">{role.location}</span>
          </p>
          <p className="mt-4 max-w-[60ch]">{role.summary}</p>
          <ul className="mt-3 max-w-[60ch] list-[square] space-y-1 pl-5">
            {role.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}
