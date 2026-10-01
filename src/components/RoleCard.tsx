import { Reveal } from '#/components/Reveal'
import type { Role } from '#/content/cv'

export function RoleCard({ role }: { role: Role }) {
  const years =
    role.startYear === role.endYear ? role.startYear : `${role.startYear}–${role.endYear}`

  return (
    <Reveal>
      <article className="grid gap-x-10 gap-y-4 py-6 md:grid-cols-[15rem_minmax(0,1fr)] md:items-baseline md:py-10 print:items-baseline print:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] print:py-4">
        <p className="text-2xl/tight font-extrabold md:text-3xl/tight print:text-lg">{years}</p>
        <div>
          <h3 className="text-2xl/tight font-extrabold md:text-3xl/tight print:text-lg">
            {role.title}
          </h3>
          <p className="mt-1 text-lg font-semibold">
            {role.company}
            {role.location && <span className="text-muted">, {role.location}</span>}
          </p>
          <p className="text-muted">{role.dates}</p>
          <ul className="mt-4 max-w-[60ch] list-[square] space-y-1 pl-5">
            {role.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}
