// @flow

import NumAbbr from 'number-abbreviate';

const numAbbr = new NumAbbr(['B', 'M', 'Mil', 'T']);

const abbrNumber = (value: number): string => numAbbr.abbreviate(value, 1);

export default abbrNumber;
