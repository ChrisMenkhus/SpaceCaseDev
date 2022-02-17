/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   // Enables the styled-components SWC transform
  //   // styledComponents: true,
  // },
  content: [
    './src/pages/*.{html,js,ts,tsx}',
    './src/components/**/*.{html,js,ts,tsx}',
  ],
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
