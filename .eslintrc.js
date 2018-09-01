const { resolve } = require('path');

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:flowtype/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'prettier',
    'flowtype',
    'graphql',
    'jest',
    'eslint-comments',
  ],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['__APOLLO_STATE__'] }],
    'react/sort-comp': [
      2,
      {
        order: [
          'type-annotations',
          'state',
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'flowtype/require-valid-file-annotation': ['error', 'always'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'webpack/**/*.js',
          'server/**/*.{js,jsx}',
          'scripts/**/*.js',
          '.storybook/**/*.js',
          'src/components/**/*.stories.jsx',
          'src/**/*.test.{js,jsx}',
        ],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/button-has-type': 'off',
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        tagName: 'gql',
        schemaJsonFilepath: resolve(__dirname, 'schema.json'),
      },
    ],
  },
};
