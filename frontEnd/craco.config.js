const path = require('path');
const CracoLessPlugin = require('craco-less');
const resolve = (dir) => path.resolve(__dirname, dir);
const mockMiddleware = require('./mock.config');

const PORT = 3000;

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      views: resolve('src/views'),
      services: resolve('src/services'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
    historyApiFallback: false,
    hot: false,
    host: '0.0.0.0',
    port: PORT,
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      const projectDir = path.resolve();
      const mockDir = './mock';
      devServer.app.use(mockMiddleware({ projectDir, mockDir }));
    },
  },
};
