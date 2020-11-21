const path = require('path');
const webpack = require("webpack");

let config = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "src": path.resolve(__dirname, 'src/')
    },
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.output = {
      filename: 'bundle.js',
      path: path.resolve(__dirname),
    };

    config.devServer = {
      contentBase: path.join(__dirname, 'public/'),
      port: 3000,
      publicPath: 'http://localhost:3000/'
    };

    config.plugins = [new webpack.HotModuleReplacementPlugin()];
  }

  if (argv.mode === 'production') {
    config.output = {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    };
  }

  return config;
};