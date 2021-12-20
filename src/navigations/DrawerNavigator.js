import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAV} from '../constants/routeNames';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME_NAV} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
