jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('@react-native-async-storage/async-storage', () => jest.fn());
jest.mock('react-native-localize', () => ({
    getLocales: jest.fn(() => [{ languageTag: 'en-US' }]),
    getCountry: jest.fn(() => 'US'),
    getCurrency: jest.fn(() => 'USD'),
  }));
  
