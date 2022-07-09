import React from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import Button from '../../components/Button';
import Main from '../../components/Main';
import Section from '../../components/Section';
import SText from '../../components/SText';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import images from '../../utils/Images';
import Margin from '../../utils/Margin';

function Welcome() {
  return (
    <>
      <Main moreStyle={style.main}>
        <Section moreStyle={style.sectionInitial}>
          <Image source={images.stackW} style={style.logo} />
          <SText moreStyle={style.title} bold>
            Apollo
          </SText>
          <SText>An application for creativity</SText>
        </Section>
      </Main>
      <View style={{ backgroundColor: Colors.dark }}>
        <Section moreStyle={style.container}>
          <SText size={25} bold dark>
            Welcome
          </SText>
          <SText dark moreStyle={style.show}>
            Sign in or register. We will be happy to have you with us. Share
            your creativity with our community.
          </SText>
          <Button dark>
            <SText center bold>
              Sign in
            </SText>
          </Button>
          <Button>
            <SText dark center bold>
              Sign up
            </SText>
          </Button>
        </Section>
      </View>
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
