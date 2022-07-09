import React from 'react';
import ApolloProvider from './context/Apollo';
import Router from './router/Router';

function App() {
  return (
    <ApolloProvider>
      <Router />
    </ApolloProvider>
  );
}

export default App;
