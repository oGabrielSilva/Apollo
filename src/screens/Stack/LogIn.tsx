import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import BarGoBack from '../../components/Bar';
import FormSignIn from '../../components/Forms';
import Main from '../../components/Main';
import Section from '../../components/Section';
import SText from '../../components/SText';
import { TLogIn } from '../../types/screens';
import Colors from '../../utils/Colors';
import Margin from '../../utils/Margin';

function LogIn({ navigation }: TLogIn) {
  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setInputFocus(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setInputFocus(false),
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={[{ flex: 1 }, style.topBar]}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View>
            <StatusBar
              backgroundColor={Colors.yellow}
              barStyle="dark-content"
            />
            <Section>
              <BarGoBack dark onPress={() => navigation.goBack()}>
                {inputFocus && (
                  <View style={style.registerBar}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SignUp')}
                    >
                      <SText moreStyle={style.registerTextBar} bold>
                        Register
                      </SText>
                    </TouchableOpacity>
                  </View>
                )}
              </BarGoBack>
            </Section>
            {!inputFocus && (
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
                  Ohh, let&apos;s get a session started! Find new things and
                  share your creativity
                </SText>
              </Section>
            )}
          </View>
          <Main moreStyle={style.main}>
            <FormSignIn
              forgotPassword={() => navigation.navigate('ForgotPassword')}
            />
          </Main>
          {!inputFocus && (
            <View style={style.register}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <SText moreStyle={style.registerText}>Register</SText>
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAvoidingView>
      </ScrollView>
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
  registerBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerTextBar: {
    color: Colors.dark,
  },
});

export default LogIn;
