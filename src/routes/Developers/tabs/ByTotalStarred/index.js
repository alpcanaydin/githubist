// @flow

import universal from 'react-universal-component';

import { ErrorState, Loading } from '../../../../components';

export default universal(() => import('./ByTotalStarred'), { loading: Loading, error: ErrorState });
