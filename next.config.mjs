import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove this line:
  // output: 'export',
  
  // Disable source maps in production for faster loading
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
  
  distDir: process.env.DIST_DIR || '.next',
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
    // Remove unoptimized if not needed
    // unoptimized: true,
  },
  webpack(config, { dev }) {
    if (dev) {
      const ignoredPaths = (process.env.WATCH_IGNORED_PATHS || '')
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);
      config.watchOptions = {
        ignored: ignoredPaths.length
          ? ignoredPaths.map((p) => `**/${p.replace(/^\/+|\/+$/g, '')}/**`)
          : undefined,
      };
    }
    return config;
  },
};

export default nextConfig;