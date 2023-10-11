/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/jago-commerce-next-admin",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/jago-commerce-next-admin',
          basePath: false,
          permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig