import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { uiTheme } from '../../styles/theme';

export const styles = StyleSheet.create<{
  container: ViewStyle;
  title: TextStyle;
}>({
  container: {
    flex: 1,
    backgroundColor: uiTheme.palette.backgroundColorPrimary,
  },
  title: {
    marginLeft: 30,
    marginBottom: 20,
  },
});
