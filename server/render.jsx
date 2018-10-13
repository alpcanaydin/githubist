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
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  const content = ReactDOM.renderToString(root);

  const helmet = Helmet.renderStatic();
  const chunkNames = flushChunkNames();

  const { js, styles } = flushChunks(clientStats, { chunkNames });

  const { url, serverStatusCode = 200 } = context;

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${styles.toString()}

        <link rel="shortcut icon" href="${process.env.PUBLIC_PATH || ''}favicon.png">
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="react-root">${content}</div>
        <script>
          window.__APOLLO_STATE__ = ${initialState};
        </script>
        ${js.toString()}

        <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env
          .GA_TRACKING_ID || ''}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_TRACKING_ID || ''}');
        </script>

      </body>
    </html>`;

  const output =
    process.env.NODE_ENV === 'production'
      ? html.replace(/\s{2,}/g, '').replace(/(\r\n|\n|\r)/gm, '')
      : html;

  res.status(serverStatusCode);
  res.send(output);
};
