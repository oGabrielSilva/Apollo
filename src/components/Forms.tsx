import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
import Margin from '../utils/Margin';
import emailValidation from '../validation/email';
import Button from './Button';
import Section from './Section';
import SText from './SText';

interface Props {
  forgotPassword: () => void;
}

export function FormSignUp() {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  useEffect(() => setNameValid(name.length > 1), [name]);

  useEffect(() => setEmailValid(emailValidation(email)), [email]);

  useEffect(() => setPasswordValid(password.length >= 8), [password]);

  return (
    <Section>
      <TextInput
        style={[style.input, nameValid && { borderColor: Colors.yellow }]}
        selectionColor={Colors.yellow}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
        placeholderTextColor={Colors.white}
        autoComplete="name"
        autoCorrect
        autoCapitalize="words"
        returnKeyType="go"
      />
      <TextInput
        ref={emailRef}
        style={[style.input, emailValid && { borderColor: Colors.yellow }]}
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
        style={[style.input, passwordValid && { borderColor: Colors.yellow }]}
        selectionColor={Colors.yellow}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        placeholderTextColor={Colors.white}
        returnKeyType="send"
        secureTextEntry
      />
      <Button onPress={() => {}}>
        <SText dark bold center>
          Sign up
        </SText>
      </Button>
    </Section>
  );
}

function FormSignIn({ forgotPassword }: Props) {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const passwordRef = useRef<TextInput>(null);

  useEffect(() => setEmailValid(emailValidation(email)), [email]);

  useEffect(() => setPasswordValid(password.length >= 8), [password]);

  return (
    <Section>
      <TextInput
        style={[style.input, emailValid && { borderColor: Colors.yellow }]}
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
        style={[style.input, passwordValid && { borderColor: Colors.yellow }]}
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
    paddingVertical: 5,
    color: Colors.white,
    fontFamily: Fonts.montserrat,
    fontSize: Fonts.sizes.normal,
  },
  forgot: {
    marginBottom: Margin.horizontal,
  },
});

export default FormSignIn;
