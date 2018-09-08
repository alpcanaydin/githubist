// @flow

import universal from 'react-universal-component';

import { ErrorState, Loading } from '../../../../components';

export default universal(() => import('./ByStars'), { loading: Loading, error: ErrorState });
