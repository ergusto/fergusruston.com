# fergusruston.com design

Date: 2026-10-01

## Goal

A personal CV site: three pages, bold and graphic, with restrained animation, published to Cloudflare as static files.

## Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | TanStack Start (React, Vite) with prerendering | Each page ships as static HTML, so search engines and link previews work per page |
| Animation | Motion (`motion/react`) | Covers the page wipe and scroll reveals without a heavier library |
| Styling | Tailwind v4, tokens as CSS variables in `src/styles.css` | One place for colour and type decisions |
| Font | Archivo variable, self-hosted via Fontsource | Has a width axis: wide for headings, condensed for the email address. The Latin file is preloaded so headings never paint in a fallback font |
| Hosting | Cloudflare Workers static assets, no Worker script | The site is fully prerendered |
| Package manager | pnpm 10, pinned in `package.json` | The Homebrew corepack (0.33) cannot run pnpm 12 |

## Pages

- `/` Home. The name fills the viewport. Two rows link to the other pages.
- `/experience`. A timeline of roles with years in the left column, then skills. "Save as PDF" calls `window.print()`; a print stylesheet turns the page into a CV with a name and contact header.
- `/contact`. The email address is the hero, followed by profile links.
- Any other path renders the catch-all route `src/routes/$.tsx`, prerendered as `404.html`.

## Content

All copy lives in `src/content/cv.ts` as typed data, taken from Fergus's CV plus the current role, which Fergus supplied separately.

## Design tokens

- Cobalt `#1E3A9E` background with white `#FFFFFF` text on every page. Muted text is a mix of the two.
- Hover and current-page states invert to a white block with cobalt text.
- Print uses black on white.
- Headings use weight 900 at 125% width, uppercase. Body text uses the regular width.
- Rules are 3 to 6px, scaling with the viewport.
- Fitted headings scale with the viewport up to a 128px font size (`--heading-max` in `src/styles.css`).
- The Contact email is condensed and capped at 3rem, the same size as that page's heading.

## Motion

- Page change: the router runs navigations as view transitions (`defaultViewTransition` in `src/router.tsx`). The old page is covered from the bottom up, then the new page is uncovered from the top down, both in the background colour. The keyframes are in `src/styles.css`. Browsers without view transitions change page instantly.
- Scroll: each ruled section draws its rule across and fades its content in (`Reveal`).
- Reduced motion: the view transition animation is disabled by media query and Motion runs with `reducedMotion="user"`.
- Without JavaScript, a `<noscript>` style keeps revealed content visible.

## Build and deploy

- `pnpm build` writes static files to `dist/client`: `index.html`, `experience.html`, `contact.html`, `404.html`.
- `wrangler.jsonc` points `assets.directory` at `dist/client` with `not_found_handling: "404-page"`.
- `pnpm preview` serves the built output locally through Wrangler. `pnpm run deploy` builds and publishes (`pnpm deploy` without `run` is a different, built-in pnpm command).

## Known issue

`404.html` is prerendered at `/404` but served at whatever unknown path was requested. The router resolves a different match on the client, so React logs a hydration error and re-renders the page. The page displays correctly.

## Not included

- Unit tests. The site renders typed data and has no other logic; `pnpm typecheck` and the build cover it.
- A footer.
- A contact form.
