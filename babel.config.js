module.exports = {
  presets: [
    'module:@react-native/babel-preset',  // Preset de React Native
    '@babel/preset-env',  // Compatibilidad con las últimas versiones de JS
    '@babel/preset-react',  // Para JSX
    '@babel/preset-typescript', // Si estás usando TypeScript
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          'moti/skeleton': 'moti/skeleton/react-native-linear-gradient',
        },
      },
    ],
    'react-native-reanimated/plugin',  // Para React Native Reanimated si lo estás usando
  ],
};
