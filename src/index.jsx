// @flow

import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';

import App from './App';

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
  link: createHttpLink({
    uri: (process.env.GRAPHQL_URL: any),
    fetch,
  }),
  cache: new InMemoryCache({}).restore(window.__APOLLO_STATE__),
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
