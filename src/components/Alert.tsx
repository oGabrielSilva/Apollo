import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { IAlert } from '../types/components';
import Colors from '../utils/Colors';
import Margin from '../utils/Margin';
import Section from './Section';
import SText from './SText';

function Alert({
  visible,
  title,
  body,
  buttonText = ['OK', 'Back'],
  onRequestClose,
  buttonPrimary,
  buttonSecundary,
}: IAlert) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onRequestClose ?? (() => {})}
      transparent
    >
      {visible && <StatusBar backgroundColor={Colors.yellowDark} />}
      <View style={style.main}>
        <Section moreStyle={style.container}>
          <SText bold size={20} moreStyle={style.title}>
            {title}
          </SText>
          {(body && <SText>{body}</SText>) || (
            <ActivityIndicator size="small" color={Colors.yellow} />
          )}
          <View style={style.buttonContainer}>
            {buttonPrimary && (
              <>
                <TouchableOpacity onPress={buttonPrimary}>
                  <SText>{buttonText[0]}</SText>
                </TouchableOpacity>
                {buttonSecundary && (
                  <TouchableOpacity onPress={buttonSecundary}>
                    <SText>{buttonText[1]}</SText>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </Section>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Colors.dark,
    width: Dimensions.get('screen').width - 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: Margin.horizontal,
  },
});

export default Alert;
