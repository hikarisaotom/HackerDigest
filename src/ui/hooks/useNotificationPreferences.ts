import { useContext } from 'react';
import { AppContext } from '../../data/store/Context';
import getNotificationPreferencesUseCase from '../../domain/useCases/notifications/getNotificationPreferencesUseCase';
import { NotificationPreferences } from '../../domain/interfaces/notifications';
import saveNotificationPreferencesUseCase from '../../domain/useCases/notifications/saveNotificationPreferencesUseCase';

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
            dispatch({ type: 'setNotificationPreferences', payload: preferences });
             await saveNotificationPreferencesUseCase(preferences);
        } catch (err) {
            dispatch({ type: 'setError', payload: 'Something went wrong' });
        }
    };

    return { getNotificationPreferences, saveNotificationPreferences};
};

export default useNotificationPreferences;
