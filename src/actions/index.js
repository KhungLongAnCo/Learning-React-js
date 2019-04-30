import * as types from '../constants/actionType';

export const listAll = () =>{
    return {
        type: types.LIST_ALL
    }
}
export const addTask = (tasks) =>{
    return {
        type: types.ADD_TASK,
        tasks:tasks
    }
}