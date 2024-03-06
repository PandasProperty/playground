/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/playground" : undefined,
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  reactStrictMode: true,
}

module.exports = nextConfig
