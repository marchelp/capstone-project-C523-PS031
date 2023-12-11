/**
 * @type {import('next').NextConfig}
 */
  const nextConfig = {
  basePath: "/admin-setor-sampah",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/admin-setor-sampah',
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