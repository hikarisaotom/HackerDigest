import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ArticlesScreen, DeletedArticlesScreen, FavoritesScreen } from '../screens';
import useFetchNews from '../hooks/useFetchNews';
import useDeletedNews from '../hooks/useDeletedNews';
import useFavoritesNews from '../hooks/useFavoritesNews';
import getNotificationPreferencesUseCase from '../../domain/useCases/notifications/getNotificationPreferencesUseCase';
import { AppContext } from '../../data/store/Context';
import Icon from 'react-native-vector-icons/FontAwesome';
import useIntervalThread from '../hooks/useIntervalThread';
import useNotificationPreferences from '../hooks/useNotificationPreferences';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { state, dispatch } = useContext(AppContext);
  const { fetchNews } = useFetchNews();
  const { fetchDeleted } = useDeletedNews();
  const { fetchFavorites } = useFavoritesNews();
  const { getNotificationPreferences } = useNotificationPreferences();

  const { stopThread, isRunning } = useIntervalThread({
    message: state.notificationPreferences.articleType,
    interval: state.notificationPreferences.timeInterval,
    shouldRun: state.notificationPreferences.sendNotifications,
  });

  useEffect(() => {
    getNotificationPreferences();
    fetchFavorites();
    fetchNews().then(() => { fetchDeleted()});

    return () => {
      stopThread();
    };
  }, []);

  return (
    <Tab.Navigator
    >
      <Tab.Screen name="Articles" component={ArticlesScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="list-alt" size={size} color={color} />
        ), headerShown: false
      }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" size={size} color={color} />
        ), headerShown: false
      }} />
      <Tab.Screen name="Deleted Articles" component={DeletedArticlesScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="trash-o" size={size} color={color} />
        ), headerShown: false
      }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
