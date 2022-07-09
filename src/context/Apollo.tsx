import React, { createContext, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { IChildren } from '../types/children';
import { IContext } from '../types/context';
import Colors from '../utils/Colors';

export const ApolloContext = createContext<IContext>({});

function ApolloProvider({ children }: IChildren) {
  const state = useMemo(() => ({}), []);

  return (
    <>
      <StatusBar backgroundColor={Colors.dark} barStyle="light-content" />
      <ApolloContext.Provider value={state}>{children}</ApolloContext.Provider>
    </>
  );
}

export default ApolloProvider;
