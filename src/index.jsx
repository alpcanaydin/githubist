// @flow

import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  uri: process.env.GRAPHQL_URL,
});

const render = Component => {
  const mountNode = (document.getElementById('react-root'): any);
  hydrate(
    <AppContainer>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </ApolloProvider>
    </AppContainer>,
    mountNode,
  );
};

render(App);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
