import { all } from 'redux-saga/effects';
// import systemSaga from './system/sagas';

export default function* rootSaga() {
  yield all([
    // systemSaga()
  ]);
}
