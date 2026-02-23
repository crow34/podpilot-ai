/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'avatar.vercel.sh'],
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'PodPilot AI',
  },
}

module.exports = nextConfig
