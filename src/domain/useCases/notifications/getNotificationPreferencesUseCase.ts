import localStorageService from '../../../data/services/localStorageService';

const getNotificationPreferencesUseCase = async () => {
    try {
      return await localStorageService.readNotificationPreferences();
    } catch (error) {
      throw error;
    }
  };
  export default getNotificationPreferencesUseCase;
