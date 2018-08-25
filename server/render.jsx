// @flow

import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';
import fetch from 'node-fetch';
import { StaticRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider, getDataFromTree } from 'react-apollo';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import App from '../src/App';

export default ({ clientStats }: any) => async (req: express$Request, res: express$Response) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: (process.env.GRAPHQL_URL: any),
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  const context = {};

  const root = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  try {
    await getDataFromTree(root);

    const content = ReactDOM.renderToString(root);

    const helmet = Helmet.renderStatic();
    const chunkNames = flushChunkNames();

    const { js, styles } = flushChunks(clientStats, { chunkNames });

    const { url } = context;

    if (url) {
      res.redirect(url);
      return;
    }

    const initialState = JSON.stringify(client.extract())
      .replace(/</g, '\\u003c')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');

    const html = `<!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${styles.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="react-root">${content}</div>
        <script>
          window.__APOLLO_STATE__ = ${initialState};
        </script>
        ${js.toString()}
      </body>
    </html>`;

    const output =
      process.env.NODE_ENV === 'production'
        ? html.replace(/\s{2,}/g, '').replace(/(\r\n|\n|\r)/gm, '')
        : html;

    res.send(output);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.end('Server error.');
  }
};
