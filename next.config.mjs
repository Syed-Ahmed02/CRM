import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const projectRoot = fs.realpathSync.native(
  path.dirname(fileURLToPath(import.meta.url)),
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailark.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
