/* eslint-disable no-undef */
// carco.config.js

const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@atom': path.resolve(__dirname, 'src/atom'),

      //API child
      '@API': path.resolve(__dirname, 'src/API'),
      '@comment': path.resolve(__dirname, 'src/API/comment'),
      '@main': path.resolve(__dirname, 'src/API/main'),

      // component child
      '@components': path.resolve(__dirname, 'src/components'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@search': path.resolve(__dirname, 'src/components/search'),
      '@icons': path.resolve(__dirname, 'src/components/icons')
    }
  }
}
