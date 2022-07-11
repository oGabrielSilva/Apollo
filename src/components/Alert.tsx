import React from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { IAlert } from '../types/components';
import Colors from '../utils/Colors';
import Section from './Section';
import SText from './SText';

function Alert({
  visible,
  title,
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
      <View style={style.main}>
        <Section>
          <SText>{title}</SText>
          <View style={style.buttonContainer}>
            {(buttonPrimary && (
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
            )) || <ActivityIndicator size="small" color={Colors.yellow} />}
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Alert;
