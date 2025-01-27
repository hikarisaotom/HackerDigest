import { useContext } from 'react';
import { AppContext } from '../../data/store/Context';
import getNotificationPreferencesUseCase from '../../domain/useCases/notifications/getNotificationPreferencesUseCase';
import { NotificationPreferences } from '../../domain/interfaces/notifications';
import saveNotificationPreferencesUseCase from '../../domain/useCases/notifications/saveNotificationPreferencesUseCase';
import i18n from 'i18next';
import notificationService from '../services/NotificationService';

const useNotificationPreferences = () => {
    const {dispatch } = useContext(AppContext);

    const getNotificationPreferences = async () => {
        try {
            const result = await getNotificationPreferencesUseCase();
            dispatch({ type: 'setNotificationPreferences', payload: result });
            return result;
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
            return [];
        }
    };

    const saveNotificationPreferences = async (preferences: NotificationPreferences) => {
        try {
            let title = i18n.t('toasts.settings_saved_title');
            let message = i18n.t('toasts.settings_saved_message');
            notificationService.showSucessToast(title, message);
            dispatch({ type: 'setNotificationPreferences', payload: preferences });
             await saveNotificationPreferencesUseCase(preferences);
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
        }
    };

    return { getNotificationPreferences, saveNotificationPreferences};
};

export default useNotificationPreferences;
