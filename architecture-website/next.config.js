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
  // Site kök dizinden yayınlanacağı için basePath ve assetPrefix kaldırılıyor
  // basePath: '/BIAN',
  // assetPrefix: '/BIAN/',
};

module.exports = nextConfig; 