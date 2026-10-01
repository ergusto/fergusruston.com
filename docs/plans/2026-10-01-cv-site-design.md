# fergusruston.com design

Date: 2026-10-01

## Goal

A personal CV site: three pages, bold and graphic, with restrained animation, published to Cloudflare as static files.

## Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | TanStack Start (React, Vite) with prerendering | Each page ships as static HTML, so search engines and link previews work per page |
| Animation | Motion (`motion/react`) and one CSS keyframe | Covers the page wipe and scroll reveals without a heavier library |
| Styling | Tailwind v4, tokens as CSS variables in `src/styles.css` | One place for colour and type decisions |
| Font | Archivo variable, self-hosted via Fontsource | Has a width axis, which the home page animates |
| Hosting | Cloudflare Workers static assets, no Worker script | The site is fully prerendered |
| Package manager | pnpm 10, pinned in `package.json` | The Homebrew corepack (0.33) cannot run pnpm 12 |

## Pages

- `/` Home, yellow. The name fills the viewport and stretches from condensed to wide on load. Two rows link to the other pages.
- `/experience`, white. A timeline of roles with years in the left column, then skills and education. "Save as PDF" calls `window.print()`; a print stylesheet turns the page into a CV with a name and contact header.
- `/contact`, black. The email address is the hero, followed by profile links.
- Any other path renders the catch-all route `src/routes/$.tsx`, prerendered as `404.html`.

## Content

All copy lives in `src/content/cv.ts` as typed data. It is placeholder content: the roles, companies, dates, education, location, email and profile links are invented and need replacing.

## Design tokens

- Paper `#FFFFFF`, ink `#000000`, signal yellow `#FFD600`. Muted text is a mix of the page's foreground and background.
- Each page sets a theme (`paper`, `signal`, `ink`) through `data-theme` on `<body>`, chosen by pathname in `src/routes/__root.tsx`.
- Headings use weight 900 at 125% width, uppercase. Body text uses the regular width.
- Rules are 3 to 6px, scaling with the viewport.

## Motion

- Home: the name animates `font-stretch` from 62% to 125% (CSS keyframes).
- Page change: a full-screen block wipes upward (`PageTransition`). It does not run on first load, so prerendered pages are never covered before JavaScript arrives.
- Scroll: each ruled section draws its rule across and fades its content in (`Reveal`).
- Reduced motion: the CSS animation is disabled by media query and Motion runs with `reducedMotion="user"`.
- Without JavaScript, a `<noscript>` style keeps revealed content visible.

## Build and deploy

- `pnpm build` writes static files to `dist/client`: `index.html`, `experience.html`, `contact.html`, `404.html`.
- `wrangler.jsonc` points `assets.directory` at `dist/client` with `not_found_handling: "404-page"`.
- `pnpm preview` serves the built output locally through Wrangler. `pnpm deploy` builds and publishes.

## Known issue

`404.html` is prerendered at `/404` but served at whatever unknown path was requested. The router resolves a different match on the client, so React logs a hydration error and re-renders the page. The page displays correctly.

## Not included

- Unit tests. The site renders typed data and has no other logic; `pnpm typecheck` and the build cover it.
- A footer.
- A contact form.
