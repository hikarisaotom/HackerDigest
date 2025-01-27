import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { SettingsScreen } from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../../data/store/Context';
import WebViewModal from '../components/molecules/WebViewModal/WebViewModal';
import { Platform } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <>
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
    {state.url && (
        <WebViewModal
          visible={Platform.OS === 'ios' && state.url !== null && state.url !== undefined && state.url !== ''}
          url={state.url}
          onClose={() => dispatch({ type: 'setUrl', payload: null })}
        />
      )}
    </>
  );
};

export default DrawerNavigator;
