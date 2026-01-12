module.exports = {
  name: "Transit Portal",
  slug: "transit",
  version: "1.0.0",
  icon: "./assets/transit/icon.png",
  splash: {
    image: "./assets/transit/icon.png",
    resizeMode: "contain",
    backgroundColor: "#001f40",
  },
  eas: {
    projectId: "",
  },
  ios: {
    bundleIdentifier: "com.transit.portal",
    supportsTablet: true,
  },
  android: {
    package: "com.transit.portal",
    adaptiveIcon: {
      foregroundImage: "./assets/transit/adaptive-icon.png",
      backgroundColor: "#001f40",
    },
  },
  plugins: [
    [
      "expo-splash-screen",
      {
        backgroundColor: "#001f40",
        image: "./assets/transit/icon.png",
        imageWidth: 200,
      },
    ],
  ],
};
