import localStorageService from '../../../data/services/localStorageService';
import { NotificationPreferences } from '../../interfaces/notifications';

const saveNotificationPreferencesUseCase = async (preferences:NotificationPreferences) => {
    try {
      await localStorageService.saveNotificationPreferences(preferences);
    } catch (error) {
      throw error;
    }
  };
  export default saveNotificationPreferencesUseCase;
