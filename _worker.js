export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      // API routes 처리
      return env.ASSETS.fetch(request);
    }
    return env.ASSETS.fetch(request);
  },
};
