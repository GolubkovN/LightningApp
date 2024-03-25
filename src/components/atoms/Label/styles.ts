import { StyleSheet, TextStyle } from 'react-native';
import { uiTheme } from '../../../styles/theme';

export const BaseLabelStyles = StyleSheet.create<{ paragraph: TextStyle }>({
  paragraph: {
    ...uiTheme.typography.label,
  },
});
