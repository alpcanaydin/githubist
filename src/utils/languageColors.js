// @flow

// Colors are hard-coded since this is a static data.
// It is a little dirty solution and this file needs to be updated when the language rank changed.

type Color = {
  backgroundColor: string,
  color: string,
};

const colors = {
  javascript: {
    backgroundColor: '#ffc157',
    color: '#2d2e33',
  },

  java: {
    backgroundColor: '#5781ff',
    color: '#fff',
  },

  python: {
    backgroundColor: '#FFDD57',
    color: '#2d2e33',
  },

  go: {
    backgroundColor: '#57c9ff',
    color: '#2d2e33',
  },
  
  csharp: {
    backgroundColor: '#9857FF',
    color: '#fff',
  },
};

const languageColors = (slug: string): Color => colors[slug];

export default languageColors;
