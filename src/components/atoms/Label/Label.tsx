import React, { ReactNode, memo } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { BaseLabelStyles } from './styles';
import { uiTheme } from '../../../styles/theme';

interface ILabelProps {
  xp?: {
    styles: TextStyle;
  };
  children: ReactNode;
  focused?: boolean;
}
const Label: React.FC<ILabelProps> = ({ children, xp, focused }) => {
  const styles = StyleSheet.flatten({
    ...xp?.styles,
    color: focused ? uiTheme.palette.iconColorMain : uiTheme.palette.iconColorSecondary,
    ...BaseLabelStyles.paragraph,
  });

  return <Text style={styles}>{children}</Text>;
};

export default memo(Label);
