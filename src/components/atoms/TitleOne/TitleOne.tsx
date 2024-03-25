import React, { memo } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { titleOneStyle } from './styles';

interface ITitleOneProps {
  text: string;
  xp?: {
    styles?: TextStyle;
  };
}
const TitleOne = ({ text, xp }: ITitleOneProps) => {
  const styles = StyleSheet.flatten({
    ...xp?.styles,
    ...titleOneStyle.baseStyle,
  });
  return <Text style={styles}>{text}</Text>;
};

export default memo(TitleOne);
