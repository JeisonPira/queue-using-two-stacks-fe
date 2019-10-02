import { combineReducers } from "redux";
import { tests } from './tests'
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    customers: tests,
    form: reduxForm
});
