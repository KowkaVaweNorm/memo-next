/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
      @import "app/styles/variables/size_screen.scss";
    `,
    includePaths: [path.join(__dirname, 'src/')],
  }
};

module.exports = nextConfig;
