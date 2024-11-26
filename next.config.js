/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/write-to-develop", // Replace 'repo-name' with your GitHub repository name
  images: {
    unoptimized: true, // Required if you're using `next/image`
  },
}

module.exports = nextConfig
