import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchNavOne, fetchNavTow, fetchNavTwo} from './action';
import {FETCH_NAV_ONE, FETCH_NAV_TWO} from './actionType';

function* fetchNavOneSaga(action) {
  try {
    yield put(fetchNavOne);
  } catch (e) {
    console.log(e);
  }
}
function* fetchNavTwoSaga(action) {
  try {
    yield put(fetchNavTwo);
  } catch (e) {
    console.log(e);
  }
}

function* navigationSaga() {
  yield takeLatest(FETCH_NAV_ONE, fetchNavOneSaga);
  yield takeLatest(FETCH_NAV_TWO, fetchNavTwoSaga);
}
export default navigationSaga;
