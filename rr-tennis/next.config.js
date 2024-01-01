/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.CMS_URL]
  },
  env: {
    CMS_URL: process.env.CMS_URL,
    REACT_APP_GRAPHQL_TOKEN: process.env.REACT_APP_GRAPHQL_TOKEN,
    WEB_URL: process.env.WEB_URL,
  }
}

module.exports = nextConfig
