import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ISText } from '../types/components';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';

// eslint-disable-next-line object-curly-newline
function SText({
  children,
  moreStyle,
  bold,
  italic,
  size,
  dark,
  center,
}: ISText) {
  const style = StyleSheet.create({
    main: {
      fontFamily:
        (bold && Fonts.montserratBold) ||
        (italic && Fonts.montserratItalic) ||
        Fonts.montserrat,
      fontSize: size ?? Fonts.sizes.normal,
      color: (!dark && Colors.white) || Colors.dark,
      textAlign: (center && 'center') || 'left',
    },
  });

  return <Text style={[style.main, moreStyle ?? {}]}>{children}</Text>;
}

export default SText;
