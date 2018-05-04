import {SEARCH_PENDING, SEARCH_REJECTED, SEARCH_FULFILLED, SEARCH_DATA_CLEAR} from '../constants/actions';

export const searchPending = () => ({
    type: SEARCH_PENDING
});

export const searchFulfilled = (payload) => ({
    type: SEARCH_FULFILLED,
    payload
});

export const searchRejected = (payload) => ({
    type: SEARCH_REJECTED,
    payload
});

export const clearData = () => dispatch => dispatch({
    type: SEARCH_DATA_CLEAR
});
