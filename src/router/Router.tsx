import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../screens/Stack/LogIn';
import Welcome from '../screens/Stack/Welcome';
import RootStackParamList from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
