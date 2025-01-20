import {takeEvery, put} from 'redux-saga/effects';
import {GET_USER_LIST, SET_USER_DATA} from './constants';

function* userList(): Generator<any, void, any> {
  // const url = 'https://dummyjson.com/users';
  // const url = 'http://192.168.173.241:3000/users';
  const url = 'http://10.0.2.2:3000/users';
  try {
    const response = yield fetch(url);
    const data = yield response.json();
    yield put({type: SET_USER_DATA, data});
    // yield put({type: SET_USER_DATA, data: data.users});
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

function* SagaData() {
  yield takeEvery(GET_USER_LIST, userList);
}

export default SagaData;
