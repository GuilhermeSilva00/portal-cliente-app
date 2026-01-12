if (!process.env.CLIENT) {
  throw new Error("CLIENT environment variable is required");
}

let config;
try {
  config = require("./configs/" + process.env.CLIENT + ".js");
} catch (e) {
  throw new Error("Invalid CLIENT environment variable");
}

module.exports = {
  name: config.name,
  slug: config.slug,
  version: config.version,
  orientation: "portrait",
  icon: config.icon,
  scheme: config.slug,
  userInterfaceStyle: "automatic",
  splash: config.splash,
  assetBundlePatterns: [`assets/${config.slug}/**/*`],
  ios: config.ios,
  android: config.android,
  eas: config.eas,
  plugins: config.plugins,
  extra: {
    ...config,
  },
};
