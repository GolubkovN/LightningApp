import { ImageStyle, StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create<{
  headerRightImage: ImageStyle;
  headerLeftImage: ImageStyle;
}>({
  headerRightImage: { width: 40, height: 40, borderRadius: 50, marginRight: 20 },
  headerLeftImage: { width: 80, height: 80, marginLeft: 10 },
});
