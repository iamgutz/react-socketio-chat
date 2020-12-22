const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'src');

module.exports = env => {
  const isProduction = env === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'static/js/main.chunk.[chunkhash].js',
    },
    resolve: {
      modules: [srcPath, 'node_modules'],
    },
    externals: {
      document: 'document',
      localStorage: 'localStorage',
    },
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: {
                    removeViewBox: false,
                  },
                },
              },
            },
            'url-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    devServer: {
      proxy: {
        '/socket.io': {
          target: 'http://localhost:9001',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    devtool: isProduction ? undefined : 'eval-source-map',
  };
};