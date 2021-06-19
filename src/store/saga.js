import { all } from 'redux-saga/effects';
import startGame from './saga/gameinit';

export default function* rootSaga() {
    yield all([startGame()]);
}