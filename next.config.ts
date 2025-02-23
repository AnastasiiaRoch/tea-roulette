import type { NextConfig } from 'next';

const API_URL = process.env.API_URL ?? 'http://localhost:8794';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  rewrites: async () => [
    {
      source: '/v1/users',
      destination: `${API_URL}/v1/users`,
    },
  ],
};

export default nextConfig;
