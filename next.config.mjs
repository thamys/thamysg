/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['en-US', 'pt-BR'],
  //   defaultLocale: 'pt-BR',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
