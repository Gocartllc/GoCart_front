module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@screens': "./src/screens",
          '@components': "./src/components",
          '@features': "./src/context",
          '@services': "./src/api",
          '@assets': "./src/assets",
          '@typedefs': "./src/navigation",
          '@utils': "./src/utils",
          '@helpers': "./types",
          '@logos': "./assets/logos",
          "@mealsettings": "./src/screens/mealsettings",
          "@navigation": "./src/navigation",
          "@context": "./src/context",
          "@api": "./src/api",
          "@images/*": ["./src/images/*"]
        },
      },
    ],
    '@babel/plugin-transform-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
};
