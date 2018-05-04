import {SEARCH_FULFILLED, SEARCH_PENDING, SEARCH_REJECTED, SEARCH_DATA_CLEAR} from '../constants/actions';

const initialState = {
    searchResult: [],
    isPending: false,
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PENDING:
            return {
                ...state,
                isPending: true,
                error: {},
            };
        case SEARCH_FULFILLED:
            return {
                ...state,
                isPending: false,
                searchResult: action.payload,
                error: {},
            };
        case SEARCH_REJECTED:
            return {
                ...state,
                isPending: false,
                error: action.payload,
            };
        case SEARCH_DATA_CLEAR:
            return {
                ...initialState
            };
        default:
            return state
    }
};
