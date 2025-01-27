import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { SettingsScreen } from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        drawerIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }} />
      <Drawer.Screen name="Settings" component={SettingsScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          drawerIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
