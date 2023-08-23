/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  // ... other Next.js config values ...

  images: {
    domains: [
      "items-images-production.s3.us-west-2.amazonaws.com",
      "toppng.com",
    ],
  },
};
