const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const config = {
  mode: dev ? 'development' : 'production',
  // Define bundles
  entry: {
    app: './src/assets/index.js'
  },
  output: {
    path: path.join(__dirname, 'build/static'),
    publicPath: '/static/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].js'
  },
  target: 'web',
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: 'app.bundle.css'
    }),

    // Add jQuery auto-require for vendor modules like Bootstrap.
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: '$'
          },
          {
            loader: 'expose-loader',
            options: 'jQuery'
          }
        ]
      },
      {
        test: /\.(?:css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // 'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: { limit: 10000, mimetype: 'image/svg+xml' }
        }
      },
      {
        test: /\.(?:png|jpg|jpeg)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};

if (dev) {
  config.devtool = 'inline-source-map';
}

module.exports = config;
