
import AsyncStorage from '@react-native-async-storage/async-storage';

import Config from 'react-native-config';
import { Article } from '../src/domain/interfaces/article';
import { NotificationPreferences } from '../src/domain/interfaces/notifications';
import localStorageService from '../src/data/services/localStorageService';

// mock AsyncStorage and config
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

jest.mock('react-native-config', () => ({
    API_URL: 'https://api.example.com/search?q=$SEARCH_TERM$',
    DEFAULT_SEARCH_TERM: 'mobile',
  }));


describe('localStorageService', () => {
  const mockArticle: Article = { id: 1, title: 'Test Article', url: 'https://test.com', author: 'Test Author', content: 'Test Content', date: '2025-01-20'};
  const mockArticles: Article[] = [mockArticle];
  const mockNotificationPreferences: NotificationPreferences = { sendNotifications: true, timeInterval: 180000, articleType: 'mobile' };

  beforeEach(() => {
    jest.clearAllMocks(); // Clears any mocks between tests
  });

  test('should save and read articles', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(mockArticles));

    // Test saveArticles
    await localStorageService.saveArticles(mockArticles);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('last_api_response', JSON.stringify(mockArticles));

    // Test readArticles
    const articles = await localStorageService.readArticles();
    expect(articles).toEqual(mockArticles);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('last_api_response');
  });

  test('should return empty array when reading articles fails', async () => {
    AsyncStorage.getItem.mockRejectedValueOnce(new Error('Error reading articles'));

    const articles = await localStorageService.readArticles();
    expect(articles).toEqual([]);
  });

  test('should save and read favorites', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(mockArticles));

    // Test saveFavorites
    await localStorageService.saveFavorites(mockArticles);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('favorites_list', JSON.stringify(mockArticles));

    // Test readFavorites
    const favorites = await localStorageService.readFavorites();
    expect(favorites).toEqual(mockArticles);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('favorites_list');
  });

  test('should return empty array when reading favorites fails', async () => {
    AsyncStorage.getItem.mockRejectedValueOnce(new Error('Error reading favorites'));

    const favorites = await localStorageService.readFavorites();
    expect(favorites).toEqual([]);
  });

  test('should save and read notification preferences', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(mockNotificationPreferences));

    // Test saveNotificationPreferences
    await localStorageService.saveNotificationPreferences(mockNotificationPreferences);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('notification_preferences', JSON.stringify(mockNotificationPreferences));

    // Test readNotificationPreferences
    const preferences = await localStorageService.readNotificationPreferences();
    expect(preferences).toEqual(mockNotificationPreferences);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('notification_preferences');
  });

  test('should return default notification preferences when reading fails', async () => {
    AsyncStorage.getItem.mockRejectedValueOnce(new Error('Error reading preferences'));

    const defaultResponse: NotificationPreferences = {
      sendNotifications: true,
      timeInterval: Config.DEFAULT_TIME_INTERVAL ?? 180000,
      articleType: 'mobile',
    };
    
    const preferences = await localStorageService.readNotificationPreferences();
    expect(preferences).toEqual(defaultResponse);
  });

  test('should save and read deleted articles', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(mockArticles));

    // Test saveDeleted
    await localStorageService.saveDeleted(mockArticles);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('deleted_list', JSON.stringify(mockArticles));

    // Test readDeleted
    const deleted = await localStorageService.readDeleted();
    expect(deleted).toEqual(mockArticles);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('deleted_list');
  });

  test('should return empty array when reading deleted articles fails', async () => {
    AsyncStorage.getItem.mockRejectedValueOnce(new Error('Error reading deleted articles'));

    const deleted = await localStorageService.readDeleted();
    expect(deleted).toEqual([]);
  });
});
