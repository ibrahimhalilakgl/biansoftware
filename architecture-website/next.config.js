/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'norm-art.com',
      'www.hca.com.tr',
      'revconyapi.com',
      'www.axainsaat.com',
      'norwellan.com',
    ],
  },
  basePath: '/BIAN.github.io',
  assetPrefix: '/BIAN.github.io/',
};

module.exports = nextConfig; 