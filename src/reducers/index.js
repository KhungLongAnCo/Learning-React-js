import { combineReducers } from 'redux';
import tasks from './tasks';
import displayForm from './displayFrom';
import editTask from './editTask';
import searching from './searching';
import SortTask from './SortTask';
const myReducer = combineReducers({
    tasks: tasks,
    displayForm: displayForm,
    editTask,
    searching,
    SortTask
});

export default myReducer;