import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ArticlesScreen, DeletedArticlesScreen, FavoritesScreen } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Articles" component={ArticlesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Deleted Articles" component={DeletedArticlesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
