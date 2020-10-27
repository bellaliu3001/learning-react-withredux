import { takeEvery, put } from 'redux-saga/effects';
import { INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* sageGetList() {
  const res = yield axios.get('/api/todolist');
  const action = initListAction(res.data);
  console.log(action);
  // put(action);
}

// generator func
function* todoSagas() {
  yield takeEvery(INIT_LIST, sageGetList);
}

export default todoSagas;