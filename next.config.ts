import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/chronic-haven',
  images: {
    unoptimized: true,
  },
  distDir: 'docs',
};

export default nextConfig;
