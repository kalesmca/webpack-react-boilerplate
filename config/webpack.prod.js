const { merge } = require("webpack-merge");
const path = require('path');

// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = require("./webpack.common");
// const packageJaon = require("../package.json");

const prodConfig = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "container",
    //   remotes: {
    //     accounts:
    //       "accounts@http://127.0.0.1:6767/upload/6061/remoteEntry.js",
    //     investments:
    //       "investments@http://127.0.0.1:6767/upload/6062/remoteEntry.js",
    //   },
    //   shared: packageJaon.dependencies,
    // }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
