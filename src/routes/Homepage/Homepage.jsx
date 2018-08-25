// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import HomepageQuery from './HomepageQuery';
import query from './Homepage.graphql';

const Homepage = () => (
  <HomepageQuery query={query}>
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Yükleniyor...</p>;
      }

      if (error || !data || !data.turkey) {
        return <p>Bir hata meydana geldi.</p>;
      }

      return (
        <div>
          <h1>Github Türkiye İstatistikleri</h1>
          <p>Toplam Geliştirici: {data.turkey.totalDevelopers}</p>
          <p>Toplam Repository: {data.turkey.totalRepositories}</p>
          <p>Toplam Dil: {data.turkey.totalLanguages}</p>
          <p>Toplam Şehir: {data.turkey.totalLocations}</p>
          <Link to="/developers">Geliştirici İstatistikleri</Link> |{' '}
          <Link to="/cities">Şehir İstatistikleri</Link> |{' '}
          <Link to="/languages">Dil İstatistikleri</Link> |{' '}
          <Link to="/repositories">Repository İstatistikleri</Link>
        </div>
      );
    }}
  </HomepageQuery>
);

export default Homepage;
