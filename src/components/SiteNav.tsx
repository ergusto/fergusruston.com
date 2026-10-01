import { Link, useMatches } from '@tanstack/react-router'
import { fullName } from '#/content/cv'

const navLink = 'px-3 py-1.5 font-bold transition-colors hover:bg-fg hover:text-bg'
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
      <nav aria-label="Main" className="-mr-3 flex gap-1">
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
