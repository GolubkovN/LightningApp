import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { uiTheme } from '../../../styles/theme';

export const styles = StyleSheet.create<{
  container: ViewStyle;
  title: TextStyle;
  control: ViewStyle;
  controls: ViewStyle;
  controlsContainer: ViewStyle;
  list: ViewStyle;
}>({
  container: {},
  title: {
    marginLeft: 30,
    marginBottom: 20,
  },
  list: {
    flexGrow: 0,
  },
  control: {
    backgroundColor: uiTheme.palette.iconColorMain,
    width: 10,
    height: 10,
    marginRight: 10,
    borderRadius: 50,
  },
  controls: { flexGrow: 0, marginTop: 30 },
  controlsContainer: { justifyContent: 'center', alignItems: 'center', width: '100%' },
});
