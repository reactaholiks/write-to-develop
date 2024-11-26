/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/repo-name",
  images: {
    unoptimized: true, // Required if you're using `next/image`
  },
}

module.exports = nextConfig
