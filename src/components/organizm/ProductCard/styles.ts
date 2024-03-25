import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { uiTheme } from '../../../styles/theme';

export const styles = StyleSheet.create<{
  cardContainer: ViewStyle;
  cardImage: ImageStyle;
  productInfo: ViewStyle;
  cardTextMain: TextStyle;
}>({
  cardContainer: { width: 150, marginRight: 10, borderRadius: 10 },
  cardImage: { width: 150, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  productInfo: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: uiTheme.palette.backgroundColorSecondary,
    paddingTop: 5,
  },
  cardTextMain: {
    ...uiTheme.typography.paragraph,
    paddingHorizontal: 5,
    color: uiTheme.palette.textColorSecondary,
    marginBottom: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
