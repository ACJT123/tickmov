/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tmdb.org',
        port: '',
      },
    ],
  },
};

export default nextConfig;
