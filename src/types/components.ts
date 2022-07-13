import { TextStyle, ViewStyle } from 'react-native';
import { IChildren } from './children';
import { Sizes } from './others';

export interface ISection extends IChildren {
  moreStyle?: ViewStyle;
}

export interface IMain extends ISection {}

export interface ISText extends IChildren {
  moreStyle?: TextStyle;
  bold?: boolean;
  italic?: boolean;
  size?: Sizes;
  dark?: boolean;
  center?: boolean;
}

export interface IButton extends IChildren {
  dark?: boolean;
  onPress: () => void;
}

export interface IAlert {
  visible: boolean;
  title: string;
  body?: string;
  buttonText?: Array<string>;
  onRequestClose?: () => void;
  buttonPrimary?: () => void;
  buttonSecundary?: () => void;
}

export type IGenderForms = 'F' | 'M' | 'O';
