// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import './App.scss';

import Routes from './routes';
import { Header, Footer, ScrollToTop } from './components';

const metaTitle = 'Github.ist';
const metaDesc =
  'Github üzerinde lokasyonu Türkiye olarak gözüken geliştiriciler için şehir, dil, repo ve geliştirici istatistikleri.';

const App = () => (
  <Fragment>
    <Helmet titleTemplate="%s - Github.ist" defaultTitle="Github.ist">
      <html lang="tr" />

      <meta name="description" content={metaDesc} />

      <meta property="og:type" content="object" />
      <meta name="og:description" content={metaDesc} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:image" content="https://github.ist/social.png" />
      <meta name="og:site_name" content={metaTitle} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:image" content="https://github.ist/social.png" />
      <meta name="twitter:description" content={metaDesc} />

      <link
        title="github.ist"
        rel="search"
        type="application/opensearchdescription+xml"
        href={`${process.env.PUBLIC_PATH || ''}/search.xml`}
      />
    </Helmet>

    <Header />

    <main>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </main>

    <Footer />
  </Fragment>
);

export default App;
