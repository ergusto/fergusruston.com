import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <main className="px-(--gutter) pt-6 pb-24 md:pt-12">
      <h1 className="display text-[clamp(2.5rem,9vw,8rem)]">Page not found</h1>
      <p className="mt-8 max-w-[40ch] text-xl">
        Nothing lives at this address. The page may have moved, or the link may be wrong.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-fg px-5 py-3 font-bold text-bg transition-colors hover:bg-mark hover:text-ink"
      >
        Go to the home page
      </Link>
    </main>
  )
}
