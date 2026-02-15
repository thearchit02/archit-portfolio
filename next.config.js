/** @type {import('next').NextConfig} */
const repoName = 'archit-portfolio';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  trailingSlash: true,

  // Required for GitHub Pages
  reactStrictMode: true,
};

module.exports = nextConfig;
