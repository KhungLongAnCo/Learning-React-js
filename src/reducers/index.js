import { combineReducers } from 'redux';
import tasks from './tasks';
import displayForm from './displayFrom';
const myReducer = combineReducers({
    tasks: tasks,
    displayForm: displayForm
});

export default myReducer;