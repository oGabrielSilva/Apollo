import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from './navigation';

export type TWelcome = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
export type TLogIn = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
export type TSignUp = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
