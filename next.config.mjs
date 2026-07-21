import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove this line:
  // output: 'export',
  
  productionBrowserSourceMaps: true, // ⚠️ This also slows loading - disable in production
  distDir: process.env.DIST_DIR || '.next',
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
    // Remove unoptimized: true for better performance
    // unoptimized: true,
  },
  // ... rest of config
};

export default nextConfig;