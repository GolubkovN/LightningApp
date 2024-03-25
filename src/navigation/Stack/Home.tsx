import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../containers/Home';
import { EHomeStackScreens } from '../types';
import { useLightningHeader } from '../Headers/MainHeader';
import { uiTheme } from '../../styles/theme';

const HomeStack = createStackNavigator();

const HomeStackScreen: React.FC = () => {
  const options = useLightningHeader({});
  return (
    <HomeStack.Navigator screenOptions={options}>
      <HomeStack.Screen
        options={{ cardStyle: { backgroundColor: uiTheme.palette.backgroundColorPrimary } }}
        name={EHomeStackScreens.HOME}
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};

export default React.memo(HomeStackScreen);
