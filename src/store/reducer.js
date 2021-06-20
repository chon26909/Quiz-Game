import { combineReducers } from 'redux';
import gameState from './slices/gameinit';
import quizState from './slices/game';

export default combineReducers(
    {
        gameState,
        quizState
    }
    );