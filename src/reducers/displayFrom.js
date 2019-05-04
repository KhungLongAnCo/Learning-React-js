import * as types from '../constants/actionType';

let displayForm = false;

let myReducer = (state = displayForm, action) =>{
    switch(action.type){
        case types.closeForm:
        return false;
        case types.openForm:
        return true;
        default: return state;
    }
}
export default myReducer;