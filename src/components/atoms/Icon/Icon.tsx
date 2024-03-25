import React, { memo } from 'react';
// import { createIconSetFromFontello } from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ITabBarIconProps } from '../../../navigation/types';
// import fontelloConfig from '../../../assets/fonts/lightningFont.json';

// const Icon = createIconSetFromFontello(fontelloConfig, 'fontello', 'fontello');

const TabBarIcon: React.FC<ITabBarIconProps> = ({ icon, size = 25, color }) => {
  return <MaterialIcons name={icon} size={size} color={color} />;
};

export default memo(TabBarIcon);
