import * as types from '../constants/actionType';

export const listAll = () =>{
    return {
        type: types.LIST_ALL
    }
}
export const onSave = (tasks) =>{
    return {
        type: types.onSave,
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
export const deleteItem = (id) =>{
    return {
        type: types.deleteItem,
        id:id
    }
}
export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task: task
    }
}
