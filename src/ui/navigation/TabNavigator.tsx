import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ArticlesScreen, DeletedArticlesScreen, FavoritesScreen } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
