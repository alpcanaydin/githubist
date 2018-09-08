// @flow

import universal from 'react-universal-component';

import { ErrorState, Loading } from '../../../../components';

export default universal(() => import('./ByTotalDevelopers'), {
  loading: Loading,
  error: ErrorState,
});
