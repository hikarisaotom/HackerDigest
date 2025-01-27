// // module.exports = {
// //   preset: 'react-native',
// //   setupFiles: [
// //     './node_modules/react-native-gesture-handler/jestSetup.js', // Para manejar los mocks de Gesture Handler
// //   ],
// //   transform: {
// //     '^.+\\.[jt]sx?$': 'babel-jest', // Para transpilar archivos JavaScript y TypeScript
// //     '^.+\\.js$': 'babel-jest', // Para transformar archivos JS también en node_modules
// //   },
// //   transformIgnorePatterns: [
// //     'node_modules/(?!(react-native|react-native-reanimated|@react-native-async-storage|react-native-gesture-handler|@react-navigation|react-native-config)/).+\\.js$',
// //   ],
// //   setupFilesAfterEnv: ['<rootDir>/jest-setup.js'], // Archivo de configuración personalizada para Jest
// //   testEnvironment: 'jsdom', // Usar jsdom para mejor simulación del DOM
// //   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// //   collectCoverage: true, // Habilitar reportes de cobertura
// //   collectCoverageFrom: [
// //     '**/*.{ts,tsx}',
// //     '!**/node_modules/**',
// //     '!**/__tests__/**',
// //     '!**/jest-setup.js',
// //   ],
// //   testMatch: ['**/__tests__/**/*.test.(ts|tsx)'], // Coincidir archivos de prueba
// // };

// module.exports = {
//   preset: 'react-native',
//   setupFiles: [
//     './node_modules/react-native-gesture-handler/jestSetup.js', // Para manejar los mocks de Gesture Handler
//   ],
//   transform: {
//     '^.+\\.[jt]sx?$': 'babel-jest', // Para transpilar JavaScript y TypeScript
//     '^.+\\.js$': 'babel-jest', // Para transformar archivos JS también en node_modules
//     '^.+\\.ts$': 'ts-jest', // Para transformar archivos TypeScript
//   },
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|react-native-reanimated|@react-native-async-storage|react-native-gesture-handler|@react-navigation|react-native-config|@react-native/js-polyfills)/).+\\.js$', 
//     // Agregar los polyfills y módulos necesarios
//   ],
//   setupFilesAfterEnv: ['<rootDir>/jest-setup.js'], // Archivo de configuración personalizada para Jest
//   testEnvironment: 'jsdom', // Usar jsdom para mejor simulación del DOM
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   collectCoverage: true, // Habilitar reportes de cobertura
//   collectCoverageFrom: [
//     '**/*.{ts,tsx}',
//     '!**/node_modules/**',
//     '!**/__tests__/**',
//     '!**/jest-setup.js',
//   ],
//   testMatch: ['**/__tests__/**/*.test.(ts|tsx)'], // Coincidir archivos de prueba
// };

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
