import { TextStyle } from 'react-native';

type ColorPalette = {
  backgroundColorPrimary: string;
  backgroundColorSecondary: string;
  backGroundSection: string;
  textColorMain: string;
  textColorSecondary: string;
  alertSuccess: string;
  alertWarning: string;
  alertError: string;
  accentColorOne: string;
  accentColorTwo: string;
  iconColorMain: string;
  iconColorSecondary: string;
};

const getAppPalette = (): ColorPalette => {
  return {
    backgroundColorPrimary: '#E4E3E8',
    backgroundColorSecondary: '#86B6F6',
    backGroundSection: '#9290C3',
    textColorMain: '#176B87',
    textColorSecondary: '#E4E3E8',
    alertSuccess: '#05d3b8',
    alertWarning: '#ffc704',
    alertError: '#ff5863',
    accentColorOne: '#176B87',
    accentColorTwo: '#E83E8C',
    iconColorMain: '#176B87',
    iconColorSecondary: '#E4E3E8',
  };
};

const createDefaultFontConfig = (): {
  paragraph: TextStyle;
  titleOne: TextStyle;
  buttonText: TextStyle;
  label: TextStyle;
} => {
  return {
    paragraph: {
      fontFamily: 'Fredoka-Light',
      fontSize: 14,
    },
    titleOne: {
      fontFamily: 'Fredoka-Bold',
      fontSize: 22,
    },
    buttonText: {
      fontFamily: 'Fredoka-Regular',
      fontSize: 16,
    },
    label: {
      fontFamily: 'Fredoka-Regular',
      fontSize: 12,
      textTransform: 'capitalize',
    },
  };
};

export const createTheme = () => {
  return {
    palette: getAppPalette(),
    typography: createDefaultFontConfig(),
  };
};
