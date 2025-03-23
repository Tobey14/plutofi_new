/** @type {import('next').NextConfig} */

const assetPrefix = process.env.ASSET_PREFIX;

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  async headers() {
    return [
      {
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Permissions-Policy',
            value: 'fullscreen=()'
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
          },
          {
            key: 'Cache-control',
            value: 'no-store'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ],
        source: '/:path*'
      }
    ];
  }
  // images: {
  //   domains: [],
  //   path: `${assetPrefix}/_next/image/`,
  // },
};

export default nextConfig;
