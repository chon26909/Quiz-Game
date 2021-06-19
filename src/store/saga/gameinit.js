import { take, fork, put, call } from 'redux-saga/effects';
import { startGame } from '../slices/gameinit';
import { fetchQuizFromApi } from '../../utils/api';

function* fetchQuestionSaga() {
    console.log("fetch question");
    try {
        const data = yield call(fetchQuizFromApi);
        console.log(data);

    } catch (error) {
        
    }
}

export default function* stateGameSaga() {
    while(true) {
        yield take(startGame.type);
        yield fork(fetchQuestionSaga);
    }
}