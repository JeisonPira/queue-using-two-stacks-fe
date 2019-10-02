import {createAction} from "redux-actions";
import {INSERT_TEST} from "../constants";
import {apiPost} from "../api";
import {urlDoTest} from "../api/urls";

export const insertTest = createAction(INSERT_TEST, (customer) => apiPost(urlDoTest, customer));
