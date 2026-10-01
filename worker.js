const canonicalHost = 'www.fergusruston.com'
const redirectedHost = 'fergusruston.com'

export default {
  fetch(request, env) {
    const url = new URL(request.url)

    if (url.hostname === redirectedHost) {
      url.hostname = canonicalHost
      url.protocol = 'https:'
      return Response.redirect(url.toString(), 301)
    }

    return env.ASSETS.fetch(request)
  },
}
