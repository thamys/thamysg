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
};

export default nextConfig;
