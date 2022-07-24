import React, { useContext, useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Main from '../../components/Main';
import Section from '../../components/Section';
import SText from '../../components/SText';
import { ApolloContext } from '../../context/Apollo';
import { TWelcome } from '../../types/screens';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import Images from '../../utils/Images';
import Margin from '../../utils/Margin';

function Welcome({ navigation }: TWelcome) {
  const { userInfo, handleLogOut } = useContext(ApolloContext);
  const [alertBody, setAlertBody] = useState('');

  useEffect(() => {
    if (userInfo !== null) {
      const body: string[] = [];
      const values = Object.values(userInfo);
      Object.keys(userInfo).forEach((value, index) => {
        body.push(`${value}: ${values[index]}`);
      });
      setAlertBody(body.join('\n'));
    }
  }, [userInfo]);

  const handleNavigatorToSignIn = () => navigation.navigate('SignIn');
  const handleNavigatorToSignUp = () => navigation.navigate('SignUp');

  return (
    <>
      <Main moreStyle={style.main}>
        <Section moreStyle={style.sectionInitial}>
          <Image source={Images.stackW} style={style.logo} />
          <SText moreStyle={style.title} bold>
            Apollo
          </SText>
          <SText>An application for creativity</SText>
        </Section>
      </Main>
      <View style={{ backgroundColor: Colors.dark }}>
        {!userInfo && (
          <Section moreStyle={style.container}>
            <SText size={25} bold dark>
              Welcome
            </SText>
            <SText dark moreStyle={style.show}>
              Sign in or register. We will be happy to have you with us. Share
              your creativity with our community.
            </SText>
            <Button dark onPress={handleNavigatorToSignIn}>
              <SText center bold>
                Sign in
              </SText>
            </Button>
            <Button onPress={handleNavigatorToSignUp}>
              <SText dark center bold>
                Sign up
              </SText>
            </Button>
          </Section>
        )}
      </View>
      <Alert
        title="You are already registered"
        visible={!!userInfo?.name}
        onRequestClose={() => {}}
        body={alertBody}
        buttonPrimary={handleLogOut}
        buttonsTexts={['Log out']}
      />
    </>
  );
}

const style = StyleSheet.create({
  main: {
    paddingBottom: StatusBar.currentHeight,
  },
  title: {
    fontSize: Fonts.sizes.extra,
  },
  logo: {
    width: 80,
    height: 80,
  },
  sectionInitial: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Colors.yellow,
    paddingVertical: Margin.mainVertical,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  buttons: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Margin.mainVertical,
  },
  show: {
    marginVertical: Margin.vertical,
  },
});

export default Welcome;
