import * as types from '../constants/actionType';
import ids from 'short-id';

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];

let s4 = () => {
    return ids.generate();
}
// Create new id
let generateId = () =>{
    return s4() + s4()+ '-' + s4() + s4() + '-' + s4()+ '-';
}
let myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL :
            return state;
        case types.ADD_TASK :
            let newTask = {
                id:generateId(),
                name: action.tasks.name,
                status: action.tasks.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
    return state;
}

export default myReducer;