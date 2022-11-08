const { default: next } = require('next')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  
}

module.exports = nextConfig, {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.traction.one',
        port: '',
        pathname: 'pokedex/pokemon/**',
      },
    ],
  },
}