import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    question: [],
    error: null,
    score: null,
    currentQuestionIndex: null
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        fetchQuestionsSuccess(state, action) {},
        fetchQuestionFail(state, action) {}
    }
})