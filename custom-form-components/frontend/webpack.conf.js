const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CheckerPlugin } = require("ts-loader");

module.exports = {
  mode: "production",
  entry: { index: "./src/index.tsx" },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    library: "flowableFormsWork",
    libraryTarget: "umd"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new CheckerPlugin(), new MiniCssExtractPlugin({ filename: "[name].css" })]
};
