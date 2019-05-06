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
	// find index theo id truyen vao
let	findIndex = (tasks, id) => {
		var indextask = '';
		tasks.forEach((item, index) => {
			if(item.id === id){
				indextask = index;
			}
		})
		return indextask;
	}
let myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL :
            return state;
        case types.onSave :
            if(action.tasks.id){
                let indexEdit =  findIndex(state, action.tasks.id);
                state[indexEdit] = action.tasks;
            }else{
                let newTask = {
                    id:generateId(),
                    name: action.tasks.name,
                    status: action.tasks.status === 'true' ? true : false
                }
                state.push(newTask);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.toggleStatus :
            let index = findIndex(state, action.id);
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            // cach 2
            // let copyState = {...state[index]};
            // copyState.status = !copyState.status;
            // state[index] = copyState;
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.deleteItem :
            let indexRemove = findIndex(state, action.id);
            state.splice(indexRemove , 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
}

export default myReducer;