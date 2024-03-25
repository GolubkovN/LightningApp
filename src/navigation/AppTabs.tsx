import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Label, Icon } from '../components/atoms';
import { uiTheme } from '../styles/theme';
import { tabs } from './tabs';
import { tabsStyle } from './tabsStyles';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const AppTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarAllowFontScaling: false,
        tabBarActiveTintColor: uiTheme.palette.iconColorMain,
        tabBarInactiveTintColor: uiTheme.palette.iconColorSecondary,
        tabBarStyle: tabsStyle.tabBar,
        tabBarLabelStyle: tabsStyle.label,
        tabBarShowLabel: false,
      }}>
      {tabs.map(({ name, icon, component }) => {
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              headerShown: false,
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
                return (
                  <View style={tabsStyle.tabIcon}>
                    <Icon focused={focused} icon={icon} color={color} size={size} />
                    <Label focused={focused}>{name}</Label>
                  </View>
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
export default React.memo(AppTabs);
