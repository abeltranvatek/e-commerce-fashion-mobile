import {all, fork} from 'redux-saga/effects';

import authorizeSaga from '~features/auth/redux/auth.saga';

export default function* rootSaga() {
  yield all([fork(authorizeSaga)]);
}
