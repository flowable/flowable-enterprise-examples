const path = require("path");
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: "ts-loader",
    exclude: /node_modules/
  });
  config.module.rules.push({
    test: /\.js$/,
    loader: ["source-map-loader"],
    enforce: "pre"
  });
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });
  config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");
  config.devtool = "inline-source-map";

  return config;
};
