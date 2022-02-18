module.exports = {
  reactStrictMode: true,
   images: {
    domains: ['tailwindui.com', 'images.unsplash.com'],
  },
  eslint: { ignoreDuringBuilds: true },
  env: {
    AUTH0_BASE_URL: process.env.VERCEL_URL || process.env.AUTH0_BASE_URL
  }
}
