import { Header, HeaderStyleInterpolators, StackHeaderProps, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { uiTheme } from '../../styles/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Label } from '../../components/atoms';
import { headerStyles } from './styles';

export interface ICreateHeader {
  onTitlePress?: () => void;
  onHeaderRightPress?: () => void;
}
type TCreateHeader = (props: ICreateHeader) => StackNavigationOptions;
export const DEFAULT_HEADER_HEIGHT = 76;

export const useLightningHeader: TCreateHeader = (_props) => {
  const { top: topInset } = useSafeAreaInsets();
  return {
    headerTitleAlign: 'center',
    headerMode: 'screen',
    headerStyle: {
      backgroundColor: uiTheme.palette.backgroundColorSecondary,
      elevation: 0,
      shadowOffset: { height: 0, width: 0 },
      height: DEFAULT_HEADER_HEIGHT + topInset,
      borderRadius: 25,
    },
    headerTintColor: uiTheme.palette.accentColorOne,
    headerStyleInterpolator: (props) => ({
      leftButtonStyle: HeaderStyleInterpolators.forFade(props).leftButtonStyle,
    }),
    headerTitle: (props) => <Label {...props}>Select Location</Label>,
    headerRight: (_prps) => {
      return (
        <>
          <Image style={headerStyles.headerRightImage} source={require('../../assets/images/avatar.jpg')} />
        </>
      );
    },
    headerLeft: (_prop) => {
      return (
        <>
          <Image style={headerStyles.headerLeftImage} source={require('../../assets/images/logo.png')} />
        </>
      );
    },
    header: (props: StackHeaderProps) => (
      <>
        <Header {...props} />
      </>
    ),
  };
};
