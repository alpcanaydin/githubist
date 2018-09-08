// @flow

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import languageColors from '../../utils/languageColors';
import toDateString from '../../utils/toDateString';

import HomepageQuery from './HomepageQuery';
import query from './Homepage.graphql';

import {
  LocationChart,
  BasicDeveloperCard,
  Container,
  ErrorState,
  LanguageBox,
  Loading,
  LinkButton,
  Hero,
  RepoCard,
  Section,
  SectionTitle,
} from '../../components';

import styles from './Homepage.scss';

const Homepage = () => (
  <HomepageQuery
    query={query}
    variables={{
      developersLimit: 8,
      locationsLimit: 5,
      languagesLimit: 4,
      explorersLimit: 4,
      repositoriesLimit: 6,
    }}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />;
      }

      if (error || !data || !data.turkey) {
        return <ErrorState />;
      }

      const { turkey, top8, locations, languages, firstExplorers, repositories } = data;

      const description = `Bu çalışma ${turkey.totalDevelopers.toLocaleString()} geliştirici ve ${turkey.totalRepositories.toLocaleString()} repo üzerinde gerçekleştirilmiştir.`;

      return (
        <Fragment>
          <Hero description={description} />

          <Section secondary>
            <SectionTitle subject="Sıralama">İlk 8 Geliştirici</SectionTitle>

            <Container>
              <div className={styles.top8}>
                {top8.map(developer => (
                  <BasicDeveloperCard
                    key={developer.username}
                    profilePicture={developer.avatarUrl}
                    name={developer.name}
                    username={developer.username}
                    info={developer.company || 'Bilinmiyor'}
                  />
                ))}
              </div>

              <div className={styles.buttonContainer}>
                <LinkButton to="/locations" primary>
                  Tümünü Görüntüle
                </LinkButton>
              </div>
            </Container>
          </Section>

          <Section primary>
            <SectionTitle subject="Sıralama">En Aktif Şehirler</SectionTitle>

            <Container>
              <LocationChart items={locations}>
                {item => (
                  <Link to={`/location/${item.slug}`} className={styles.locationLink}>
                    {item.name}
                  </Link>
                )}
              </LocationChart>

              <div className={styles.buttonContainer}>
                <LinkButton to="/developers" primary>
                  Şehirlere Gözat
                </LinkButton>
              </div>
            </Container>
          </Section>

          <Section secondary>
            <SectionTitle subject="Sıralama">En Meşhur Diller</SectionTitle>

            <Container>
              <div className={styles.languages}>
                {languages.map(language => (
                  <LanguageBox
                    key={language.slug}
                    name={language.name}
                    slug={language.slug}
                    style={languageColors(language.slug)}
                  />
                ))}
              </div>

              <div className={styles.buttonContainer}>
                <LinkButton to="/languages" primary>
                  Tümünü Görüntüle
                </LinkButton>
              </div>
            </Container>
          </Section>

          <Section>
            <SectionTitle subject="Sıralama">En Meşhur Repolar</SectionTitle>

            <Container>
              <div className={styles.repositories}>
                {repositories.map(repo => (
                  <RepoCard
                    key={repo.slug}
                    slug={repo.slug}
                    description={repo.description}
                    language={repo.language}
                    stars={repo.stars}
                    forks={repo.forks}
                  />
                ))}
              </div>

              <div className={styles.buttonContainer}>
                <LinkButton to="/repositories" primary>
                  Repolara Gözat
                </LinkButton>
              </div>
            </Container>
          </Section>

          <Section secondary>
            <SectionTitle subject="Zaman Makinesi">İlk Keşfedenler</SectionTitle>

            <Container>
              <div className={styles.firstExplorers}>
                {firstExplorers.map(developer => (
                  <BasicDeveloperCard
                    key={developer.username}
                    profilePicture={developer.avatarUrl}
                    name={developer.name}
                    username={developer.username}
                    info={toDateString(developer.githubCreatedAt || '')}
                  />
                ))}
              </div>
            </Container>
          </Section>
        </Fragment>
      );
    }}
  </HomepageQuery>
);

export default Homepage;
