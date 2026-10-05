// Prints the built Experience pages to PDF using their print stylesheet, so the downloads
// always match the site. Run after `vite build`; needs Google Chrome installed.
import { copyFile, readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { chromium } from 'playwright-core'

const builtSite = join(import.meta.dirname, '..', 'dist', 'client')
const publicDir = join(import.meta.dirname, '..', 'public')
// Never requested over the network: every request is answered from the built files below
const origin = 'http://cv.local'

const pdfs = [
  { page: '/experience', file: 'Fergus-Ruston-CV.pdf', title: 'Fergus Ruston CV' },
  {
    page: '/experience/summary',
    file: 'Fergus-Ruston-CV-Summary.pdf',
    title: 'Fergus Ruston CV summary',
  },
]

const contentTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
}

async function readBuiltFile(pathname) {
  const path = normalize(join(builtSite, pathname))
  if (!path.startsWith(builtSite)) return undefined

  for (const candidate of [path, `${path}.html`]) {
    try {
      return { body: await readFile(candidate), type: contentTypes[extname(candidate)] }
    } catch {
      // try the next candidate
    }
  }
  return undefined
}

const browser = await chromium.launch({ channel: 'chrome' })
const context = await browser.newContext()

await context.route('**/*', async (route) => {
  const file = await readBuiltFile(new URL(route.request().url()).pathname)
  if (!file) return route.fulfill({ status: 404, body: 'Not found' })
  return route.fulfill({ body: file.body, contentType: file.type })
})

for (const { page: path, file, title } of pdfs) {
  const page = await context.newPage()
  await page.goto(origin + path, { waitUntil: 'networkidle' })
  await page.emulateMedia({ media: 'print' })
  await page.evaluate(() => document.fonts.ready)
  // Chrome uses the page title as the PDF's title
  await page.evaluate((pdfTitle) => {
    document.title = pdfTitle
  }, title)

  const output = join(publicDir, file)
  await page.pdf({ path: output, format: 'A4', preferCSSPageSize: true })
  // public/ is the source of truth; the copy puts it into the build that is about to be deployed
  await copyFile(output, join(builtSite, file))
  await page.close()
  console.log(`Wrote ${file}`)
}

await browser.close()
