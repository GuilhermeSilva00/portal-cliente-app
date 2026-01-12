module.exports = {
  name: "SkyChart Portal",
  slug: "skychart",
  version: "1.0.0",
  icon: "./assets/skychart/icon.png",
  adaptiveIcon: {
    foregroundImage: "./assets/skychart/adaptive-icon.png",
    backgroundColor: "#ffffff",
  },
  splash: {
    image: "./assets/skychart/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  eas: {
    projectId: "",
  },
  ios: {
    bundleIdentifier: "com.skychart.portal",
    supportsTablet: true,
  },
  android: {
    package: "com.skychart.portal",
  },
};
