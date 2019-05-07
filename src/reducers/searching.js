import * as types from '../constants/actionType';

let initialState = {
}

let myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.search_task :
            return {
                sentences:action.search
            };
        default: return state;
    }
}

export default myReducer;