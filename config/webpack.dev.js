const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
// const packageJaon = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "container",
    //   remotes: {
    //     accounts: "accounts@http://localhost:6061/remoteEntry.js",
    //     investments: "investments@http://localhost:6062/remoteEntry.js",
    //   },
    //   shared: packageJaon.dependencies,
    // }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    //   favicon: "./public/favicon.ico",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
