import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Section from '../../components/Section';
import Colors from '../../utils/Colors';

function LogIn() {
  return (
    <View style={style.main}>
      <Section>
        <Text>Pç</Text>
      </Section>
    </View>
  );
}

const style = StyleSheet.create({
  main: { flex: 1, backgroundColor: Colors.dark },
});

export default LogIn;
