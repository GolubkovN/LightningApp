import * as React from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EAppRoutes } from './types';
import AppTabs from './AppTabs';

const RootStack = createStackNavigator();
export default function RootNavigator() {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true }).catch()}>
      <RootStack.Navigator
        screenOptions={{
          presentation: 'modal',
        }}>
        <RootStack.Screen
          options={{
            headerShown: false,
            animationTypeForReplace: 'pop',
          }}
          name={EAppRoutes.APP_TABS}
          component={AppTabs}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
