import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ArticlesScreen, DeletedArticlesScreen, FavoritesScreen } from '../screens';
import useFetchNews from '../hooks/useFetchNews';
import useDeletedNews from '../hooks/useDeletedNews';
import useFavoritesNews from '../hooks/useFavoritesNews';
import getNotificationPreferencesUseCase from '../../domain/useCases/notifications/getNotificationPreferencesUseCase';
import { AppContext } from '../../data/store/Context';
import backgroundService from '../services/BackgroundSyncService';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { state, dispatch } = useContext(AppContext);
  const { fetchNews } = useFetchNews();
  const { fetchDeleted } = useDeletedNews();
  const { fetchFavorites } = useFavoritesNews();

   useEffect(() => {
      console.log('[!@#] INFORMATION LOADING');
      getNotificationPreferencesUseCase().then((preferences) => {
        dispatch({ type: 'setNotificationPreferences', payload: preferences });
      });
      fetchFavorites().then(() => { console.log('[!@#] FAVORITES LOADED'); });
      fetchNews().then(() => {fetchDeleted().then(() => { console.log('[!@#] DELETED LOADED'); }); });
    }, []);

    useEffect(() => {
      if (state.notificationPreferences) {
        let {sendNotifications,timeInterval,articleType} = state.notificationPreferences;
        if(sendNotifications){
          backgroundService.stopBackgroundSync();
          backgroundService.startBackgroundSync(articleType,timeInterval);
        }else{
          backgroundService.stopBackgroundSync();
        }
        console.log('[!@#] Updated notification preferences:', state.notificationPreferences);
      }
    }, [state.notificationPreferences]);

  return (
    <Tab.Navigator
    >
      <Tab.Screen name="Articles" component={ArticlesScreen} options={{ headerShown: false }}  />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }}  />
      <Tab.Screen name="Deleted Articles" component={DeletedArticlesScreen} options={{ headerShown: false }}  />
    </Tab.Navigator>
  );
};

export default TabNavigator;
