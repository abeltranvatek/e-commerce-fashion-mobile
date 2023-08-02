module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '^~(.+)': './src/\\1',
          assets: './assets',
          mocks: './mocks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
