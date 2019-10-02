import { handleActions } from 'redux-actions';
import {FETCH_TESTS, INSERT_TEST} from "../constants";

export const tests = handleActions({
    [FETCH_TESTS]: (state, action) => [...action.payload],
    [INSERT_TEST]: (state, action) => [...state, action.payload],
}, [])
