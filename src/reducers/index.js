import { combineReducers } from 'redux';
import tasks from './tasks';
import displayForm from './displayFrom';
import editTask from './editTask';
const myReducer = combineReducers({
    tasks: tasks,
    displayForm: displayForm,
    editTask
});

export default myReducer;