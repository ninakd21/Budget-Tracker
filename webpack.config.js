const webpack = require("webpack")
const path = require("path");

module.exports = {
  entry: './Develop/public/js/index.js',
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "main.bundle.js"
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  ],
  mode: "development"
};