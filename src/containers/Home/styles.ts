import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { uiTheme } from '../../styles/theme';

export const styles = StyleSheet.create<{
  bannerContainer: ViewStyle;
  container: ViewStyle;
  bunnerImage: ImageStyle;
  title: TextStyle;
}>({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: uiTheme.palette.backgroundColorPrimary,
  },
  title: {
    marginLeft: 30,
    marginBottom: 20,
  },
  bannerContainer: { width: 350, height: 200, marginRight: 10 },
  bunnerImage: { width: '100%', height: '100%', borderRadius: 5 },
});
