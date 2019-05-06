import * as types from '../constants/actionType';

let initialState = {};

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.EDIT_TASK:
            return {...action.task};
        default : return state;
    }
}

export default myReducer;