import axios from '../config/axios';
import {searchFulfilled, searchPending, searchRejected} from '../actions/search';
import {SEARCH_URL} from '../constants/urls';

export const find = keyword => dispatch => {
    dispatch(searchPending());
    axios.get(`${SEARCH_URL}?keyword=${keyword}`)
        .then(({data}) => setTimeout(() => dispatch(searchFulfilled(data.hits.hits)), 1000))
        .catch(err => dispatch(searchRejected(err)))
};
