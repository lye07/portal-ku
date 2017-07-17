import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
//import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';


function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    // dispatch action to store links
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
    // dispatch action to store error
  }
}

// Individual exports for testing
export function* fetchLinksSaga() {
  //yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
];
