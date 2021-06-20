import { take, fork, put, call, delay } from 'redux-saga/effects';
import { cancelGame, startGame } from '../slices/gameinit';
import { fetchQuizFromApi } from '../../utils/api';
import { fetchQuestionFail,fetchQuestionsSuccess } from '../slices/game';

function* fetchQuestionSaga() {
    try {
        yield delay(1000);
        const data = yield call(fetchQuizFromApi);
        yield put(fetchQuestionsSuccess(data));
        console.log(data);

    } catch (error) {
        yield put(fetchQuestionFail("เกิดข้อผิดพลาด "))
    }
}

function* cancelFetchQuiz(forkedSaga) {
    while(true) {
        yield take(cancelGame.type);
        yield cancel(forkedSaga);
    }
}

export default function* stateGameSaga() {
    while(true) {
        yield take(startGame.type);
        const forksaga = yield fork(fetchQuestionSaga);
        yield fork(cancelFetchQuiz, forkedSaga)
    }
}