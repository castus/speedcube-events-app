/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  compiler: {
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'www.speedcubing.pl',
        pathname: '*',
      },
      {
        hostname: 'raw.githubusercontent.com',
        pathname: '*',
      },
      {
        hostname: 'www.worldcubeassociation.org',
        pathname: '*',
      },
    ],
  },
};

export default nextConfig;
