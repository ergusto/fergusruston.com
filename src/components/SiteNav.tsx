import { Link, useMatches } from '@tanstack/react-router'
import { fullName } from '#/content/cv'

// On phones the ::after extends the tap area above and below to about 48px without enlarging the visible button
const navLink =
  "relative px-2 py-1 text-sm font-bold transition-colors after:absolute after:inset-x-0 after:-inset-y-2.5 after:content-[''] hover:bg-fg hover:text-bg md:px-3 md:py-1.5 md:text-base md:after:hidden"
const currentPage = 'bg-fg text-bg'

export function SiteNav() {
  // Link's own active state follows the pending location, which changes before the view
  // transition takes its first snapshot. Committed matches only change inside the transition.
  const currentRoute = useMatches({ select: (matches) => matches[matches.length - 1]?.routeId })

  return (
    <header className="flex items-center justify-between gap-4 px-(--gutter) py-5 print:hidden">
      <Link
        to="/"
        className={`font-black uppercase font-stretch-expanded ${currentRoute === '/' ? 'invisible' : ''}`}
      >
        {fullName}
      </Link>
      <nav aria-label="Main" className="-mr-2 flex gap-2 md:-mr-3 md:gap-1">
        <NavLink to="/experience" isCurrent={currentRoute === '/experience'}>
          Experience
        </NavLink>
        <NavLink to="/contact" isCurrent={currentRoute === '/contact'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

function NavLink({
  to,
  isCurrent,
  children,
}: {
  to: '/experience' | '/contact'
  isCurrent: boolean
  children: string
}) {
  return (
    <Link
      to={to}
      className={`${navLink} ${isCurrent ? currentPage : ''}`}
      // Without this, clicking the current page replays the page transition and resets scroll
      onClick={(event) => {
        if (isCurrent) event.preventDefault()
      }}
    >
      {children}
    </Link>
  )
}
