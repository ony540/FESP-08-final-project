// carco.config.js

// eslint-disable-next-line no-undef
const path = require('path')

// eslint-disable-next-line no-undef
module.exports = {
  webpack: {
    alias: {
      // eslint-disable-next-line no-undef
      '@components': path.resolve(__dirname, 'src/components'),
      // eslint-disable-next-line no-undef
      '@pages': path.resolve(__dirname, 'src/pages'),
      // eslint-disable-next-line no-undef
      '@hooks': path.resolve(__dirname, 'src/hooks')
    }
  }
}
