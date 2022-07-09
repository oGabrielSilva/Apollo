import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
import Margin from '../utils/Margin';
import Button from './Button';
import Section from './Section';
import SText from './SText';

interface Props {
  forgotPassword: () => void;
}

function FormSignIn({ forgotPassword }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);

  return (
    <Section>
      <TextInput
        style={style.input}
        selectionColor={Colors.yellow}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="E-mail"
        placeholderTextColor={Colors.white}
        autoComplete="email"
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="go"
        onSubmitEditing={() => {
          if (passwordRef.current) passwordRef.current.focus();
        }}
      />
      <TextInput
        ref={passwordRef}
        style={style.input}
        selectionColor={Colors.yellow}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        placeholderTextColor={Colors.white}
        returnKeyType="send"
        secureTextEntry
      />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={style.forgot} onPress={forgotPassword}>
          <SText>Forgot password?</SText>
        </TouchableOpacity>
      </View>
      <Button onPress={() => {}}>
        <SText dark bold center>
          Sign in
        </SText>
      </Button>
    </Section>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: Margin.horizontal,
    marginBottom: Margin.horizontal,
    paddingHorizontal: Margin.vertical,
    paddingVertical: Margin.vertical / 2,
    color: Colors.white,
    fontFamily: Fonts.montserrat,
    fontSize: Fonts.sizes.normal,
  },
  forgot: {
    marginBottom: Margin.horizontal,
  },
});

export default FormSignIn;
