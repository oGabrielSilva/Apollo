import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ISection } from '../types/components';
import Margin from '../utils/Margin';

function Section({ children, moreStyle }: ISection) {
  return <View style={[style.main, moreStyle ?? {}]}>{children}</View>;
}

const style = StyleSheet.create({
  main: {
    paddingVertical: Margin.vertical,
    paddingHorizontal: Margin.horizontal,
  },
});

export default Section;
