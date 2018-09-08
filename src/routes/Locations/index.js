// @flow

import universal from 'react-universal-component';

import { ErrorState, Loading } from '../../components';

export default universal(() => import('./Locations'), { loading: Loading, error: ErrorState });
