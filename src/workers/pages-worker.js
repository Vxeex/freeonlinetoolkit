// Cloudflare Pages Worker — handles URL normalization
// Rewrites non-trailing-slash page requests internally,
// so browsers/search engines never see a 308 redirect.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Skip root, trailing-slash paths, and file requests (assets, etc.)
    if (path === '/' || path.endsWith('/') || path.includes('.')) {
      return env.ASSETS.fetch(request);
    }

    // For paths without trailing slashes: try adding a slash
    const withSlash = path + '/';
    const assetUrl = new URL(withSlash, url.origin);
    const assetRequest = new Request(assetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
      redirect: 'manual',
    });

    const response = await env.ASSETS.fetch(assetRequest);

    // If the page exists with trailing slash, return it (no redirect)
    if (response.ok || response.status === 304) {
      return new Response(response.body, {
        status: 200,
        statusText: 'OK',
        headers: response.headers,
      });
    }

    // If not found, let the original request handle it (may 404)
    return env.ASSETS.fetch(request);
  },
};
