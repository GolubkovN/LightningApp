import { StyleSheet, TextStyle } from 'react-native';
import { uiTheme } from '../../../styles/theme';

export const titleOneStyle = StyleSheet.create<{ baseStyle: TextStyle }>({
  baseStyle: { ...uiTheme.typography.titleOne, color: uiTheme.palette.textColorMain },
});
