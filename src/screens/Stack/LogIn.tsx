import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import BarGoBack from '../../components/Bar';
import FormSignIn from '../../components/Forms';
import Main from '../../components/Main';
import Section from '../../components/Section';
import SText from '../../components/SText';
import { TLogIn } from '../../types/screens';
import Colors from '../../utils/Colors';
import Margin from '../../utils/Margin';

function LogIn({ navigation }: TLogIn) {
  return (
    <View style={[{ flex: 1 }, style.topBar]}>
      <View>
        <StatusBar backgroundColor={Colors.yellow} barStyle="dark-content" />
        <Section>
          <BarGoBack dark onPress={() => navigation.goBack()} />
        </Section>
        <Section>
          <SText
            dark
            bold
            size={25}
            moreStyle={{ marginBottom: Margin.vertical }}
          >
            Sign in
          </SText>
          <SText dark>
            Ohh, let&apos;s get a session started! Find new things and share
            your creativity
          </SText>
        </Section>
      </View>
      <Main moreStyle={style.main}>
        <FormSignIn
          forgotPassword={() => navigation.navigate('ForgotPassword')}
        />
      </Main>
      <View style={style.register}>
        <TouchableOpacity>
          <SText moreStyle={style.registerText}>Register</SText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.dark,
    borderTopRightRadius: Margin.horizontal,
    borderTopLeftRadius: Margin.horizontal,
  },
  topBar: {
    backgroundColor: Colors.yellow,
  },
  register: {
    backgroundColor: Colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: Colors.yellow,
    padding: Margin.horizontal,
  },
});

export default LogIn;
