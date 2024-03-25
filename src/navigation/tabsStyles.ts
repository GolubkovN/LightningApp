import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { uiTheme } from '../styles/theme';

const shadows = StyleSheet.create<{
  tabBar: ViewStyle;
}>({
  tabBar: {
    shadowColor: uiTheme.palette.textColorSecondary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.5,
    elevation: 10,
  },
});

export const tabsStyle = StyleSheet.create<{
  label: TextStyle;
  tabBar: ViewStyle;
  tabIcon: ViewStyle;
}>({
  label: { ...uiTheme.typography.label },
  tabBar: {
    backgroundColor: uiTheme.palette.backgroundColorSecondary,
    borderTopColor: uiTheme.palette.backgroundColorSecondary,
    // position: 'absolute',
    // bottom: 15,
    // left: 15,
    // right: 15,
    // elevation: 0,
    // height: 90,
    // borderRadius: 25,
    paddingBottom: 0,
    ...shadows.tabBar,
  },
  tabIcon: { alignItems: 'center' },
});
