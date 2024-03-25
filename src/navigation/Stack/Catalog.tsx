import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EMenuStackScreens } from '../types';
import { CatalogScreen } from '../../containers/Catalog';
import { useLightningHeader } from '../Headers/MainHeader';
import { uiTheme } from '../../styles/theme';

const CatalogStack = createStackNavigator();

const CatalogStackScreen: React.FC = () => {
  const options = useLightningHeader({});
  return (
    <CatalogStack.Navigator screenOptions={options}>
      <CatalogStack.Screen
        options={{ cardStyle: { backgroundColor: uiTheme.palette.backgroundColorPrimary } }}
        name={EMenuStackScreens.MENU}
        component={CatalogScreen}
      />
    </CatalogStack.Navigator>
  );
};

export default React.memo(CatalogStackScreen);
