import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../screens/Stack/LogIn';
import Welcome from '../screens/Stack/Welcome';
import RootStackParamList from '../types/navigation';
import SignUp from '../screens/Stack/SignUp';
import { ApolloContext } from '../context/Apollo';

const Stack = createNativeStackNavigator<RootStackParamList>();

function LoggedOut() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function Router() {
  const { sessionInfo, userInfo } = useContext(ApolloContext);

  return (
    <NavigationContainer>
      {[sessionInfo, userInfo].includes(null) && <LoggedOut />}
    </NavigationContainer>
  );
}

export default Router;
