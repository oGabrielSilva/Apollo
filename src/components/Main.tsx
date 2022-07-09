import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { IMain } from '../types/components';
import Colors from '../utils/Colors';

function Main({ children, moreStyle }: IMain) {
  return <View style={[style.main, moreStyle ?? {}]}>{children}</View>;
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.dark,
    paddingTop: StatusBar.currentHeight,
  },
});

export default Main;
