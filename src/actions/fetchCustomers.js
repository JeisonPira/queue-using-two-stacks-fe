import { createAction } from 'redux-actions';
import { FETCH_TESTS } from '../constants';
import { urlProofs } from '../api/urls'
import { apiGet } from '../api/index'

export const fetchCustomers = createAction(FETCH_TESTS, (page, limit) => apiGet(urlProofs, page, limit));

