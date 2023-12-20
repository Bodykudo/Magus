/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    domains: [
      'googleusercontent.com',
      'oaidalleapiprodscus.blob.core.windows.net',
      'cdn.openai.com',
    ],
  },
};

// Configuration object tells the next-pwa plugin
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);
