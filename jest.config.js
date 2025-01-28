module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',  // Transforma archivos .ts y .tsx usando babel-jest
    '^.+\\.js$': 'babel-jest',        // Para archivos JS
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-reanimated|@react-native-async-storage|react-native-gesture-handler|@react-navigation|react-native-config|@react-native/js-polyfills)/).+\\.js$',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/jest-setup.js',
  ],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
};
