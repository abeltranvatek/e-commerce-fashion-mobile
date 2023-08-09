import {all, fork} from 'redux-saga/effects';

import authorizeSaga from '~features/auth/redux/auth.saga';
import navigationSaga from '../../features/navigation/stack/redux/saga';

export default function* rootSaga() {
  yield all([fork(authorizeSaga)],[fork(navigationSaga)]);
}
