import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IButton } from '../types/components';
import Colors from '../utils/Colors';
import Margin from '../utils/Margin';

function Button({ children, dark }: IButton) {
  return (
    <TouchableOpacity
      style={{ ...style.main, ...(dark && { backgroundColor: Colors.dark }) }}
    >
      {children}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    paddingHorizontal: Margin.horizontal,
    paddingVertical: Margin.vertical,
    borderRadius: 30,
    marginTop: Margin.vertical,
  },
});

export default Button;
