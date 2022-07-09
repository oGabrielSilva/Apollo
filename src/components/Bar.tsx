import React, { ReactNode } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Images from '../utils/Images';
import Margin from '../utils/Margin';

interface PropsBarGoBack {
  children?: ReactNode;
  dark?: boolean;
  onPress?: () => void;
}

function BarGoBack({ children, dark, onPress }: PropsBarGoBack) {
  const icon = (dark && Images.arrow) || Images.arrowW;

  return (
    <View style={style.view}>
      <TouchableOpacity onPress={onPress ?? (() => {})}>
        <Image source={icon} style={style.arrow} />
      </TouchableOpacity>
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  arrow: {
    width: 20,
    height: 20,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Margin.mainVertical,
  },
});

export default BarGoBack;
