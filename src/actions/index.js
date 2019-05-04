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
export const closeForm = () => {
    return {
        type: types.closeForm
    }
}
export const openForm = () =>{
    return {
        type: types.openForm
    }
}
export const toggleStatus = (id) =>{
    return {
        type:types.toggleStatus,
        id:id
    }
}