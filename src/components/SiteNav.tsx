import { Link } from '@tanstack/react-router'
import { fullName } from '#/content/cv'

const navLink = 'px-3 py-1.5 font-bold transition-colors hover:bg-fg hover:text-bg'
const currentPage = { className: 'bg-fg text-bg' }

export function SiteNav() {
  return (
    <header className="flex items-center justify-between gap-4 px-(--gutter) py-5 print:hidden">
      <Link
        to="/"
        className="font-black uppercase font-stretch-expanded"
        activeOptions={{ exact: true }}
        activeProps={{ className: 'invisible' }}
      >
        {fullName}
      </Link>
      <nav aria-label="Main" className="-mr-3 flex gap-1">
        <Link to="/experience" className={navLink} activeProps={currentPage}>
          Experience
        </Link>
        <Link to="/contact" className={navLink} activeProps={currentPage}>
          Contact
        </Link>
      </nav>
    </header>
  )
}
