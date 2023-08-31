module.exports = {
  target: ["node"],
  entry: "./src/index.js",
  output: {
    filename: "index.js",
  },
  module: {
    rules: [{ test: /\.html$/, loader: "ignore-loader" }],
  },
};
