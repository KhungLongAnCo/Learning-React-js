import * as types from '../constants/actionType';

let initialState = {
    by: '',
    value: ''
};

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SORT_TASK:
            return action.sortBy;
        default: return state;
    }
}

export default myReducer;