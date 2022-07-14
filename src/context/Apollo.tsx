import React, { createContext, useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import { IChildren } from '../types/children';
import { IContext, IUserData, TSession, TUser } from '../types/context';
import Colors from '../utils/Colors';
import UserData from '../db/UserData';
import SessionData from '../db/SessionData';

export const ApolloContext = createContext<IContext>({} as IContext);

function ApolloProvider({ children }: IChildren) {
  const [userInfo, setUserInfo] = useState<TUser>(null);
  const [sessionInfo, setSessionInfo] = useState<TSession>(null);

  useEffect(() => console.log(userInfo), [userInfo]);

  const userStorage = useMemo(() => new UserData(), []);
  const sessionStorage = useMemo(() => new SessionData(), []);

  const setUserData = (data: IUserData) => {
    const { session, user } = data;
    userStorage.storeData(JSON.stringify(user)).then(() => setUserInfo(user));
    sessionStorage
      .storeData(JSON.stringify(session))
      .then(() => setSessionInfo(session));
  };

  const state = useMemo(
    () => ({
      userInfo,
      sessionInfo,
      setUserData,
    }),
    [userInfo, sessionInfo, setUserData],
  );

  return (
    <>
      <StatusBar backgroundColor={Colors.dark} barStyle="light-content" />
      <ApolloContext.Provider value={state}>{children}</ApolloContext.Provider>
    </>
  );
}

export default ApolloProvider;
