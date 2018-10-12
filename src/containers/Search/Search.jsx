// @flow

import React, { PureComponent } from 'react';
import { ApolloConsumer, type ApolloClient } from 'react-apollo';
import { withRouter, type RouterHistory } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

import query from './Search.graphql';

import styles from './Search.scss';

type ResultType = 'DEVELOPER' | 'LANGUAGE' | 'LOCATION' | 'REPOSITORY';

type SearchResult = {
  name: string,
  slug: string,
  type: ResultType,
};

type Props = {
  history: RouterHistory,
};

type State = {
  value: string,
  suggestions: Array<SearchResult>,
};

class Search extends PureComponent<Props, State> {
  state = {
    value: '',
    suggestions: [],
  };

  onChange = (event: SyntheticEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
    this.setState({ value: newValue });
  };

  // ESLint an Flow bug at the same time!
  // eslint-disable-next-line react/no-unused-prop-types
  onSuggestionsFetchRequested = (client: ApolloClient<any>) => ({ value }: { value: string }) => {
    client
      .query({
        query,
        /* $FlowIgnoreNextLine */
        variables: { query: value },
      })
      .then(({ data }) => {
        this.setState({ suggestions: data.search });
      });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (
    event: SyntheticEvent<MouseEvent>,
    { suggestion }: { suggestion: SearchResult },
  ) => {
    const { history } = this.props;

    switch (suggestion.type) {
      case 'DEVELOPER':
        history.push(`/${suggestion.slug}`);
        break;

      case 'LANGUAGE':
        history.push(`/language/${suggestion.slug}`);
        break;

      case 'LOCATION':
        history.push(`/location/${suggestion.slug}`);
        break;

      case 'REPOSITORY':
        history.push(`/repository/${suggestion.slug}`);
        break;

      default:
        history.push(`/${suggestion.slug}`);
        break;
    }
  };

  getType = (type: ResultType) => {
    switch (type) {
      case 'DEVELOPER':
        return 'Geliştirici';

      case 'LANGUAGE':
        return 'Dil';

      case 'LOCATION':
        return 'Şehir';

      case 'REPOSITORY':
        return 'Repo';

      default:
        return 'Bilinmiyor';
    }
  };

  getSuggestionValue = (suggestion: SearchResult) => suggestion.name;

  renderSuggestion = (suggestion: SearchResult) => (
    <div>
      <span className={styles.suggestionName}>{suggestion.name}</span>
      <span className={styles.suggestionType}>{this.getType(suggestion.type)}</span>
    </div>
  );

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Geliştirici, şehir, repo veya dil ara',
      value,
      onChange: this.onChange,
      autoCorrect: 'off',
      autoCapitalize: 'off',
      autoComplete: 'off',
    };

    return (
      <ApolloConsumer>
        {client => (
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested(client)}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            theme={{
              container: styles.container,
              input: styles.input,
              suggestionsContainerOpen: styles.suggestionsContainerOpen,
              suggestionsList: styles.suggestionsList,
              suggestion: styles.suggestion,
              suggestionHighlighted: styles.suggestionHighlighted,
            }}
          />
        )}
      </ApolloConsumer>
    );
  }
}

export default withRouter(Search);
