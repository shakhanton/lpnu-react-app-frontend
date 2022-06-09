import * as ActionType from '../action/ActionType';
import initialState from './initialState';


const authorReducer = (state = initialState.authorReducer, action) => {
    switch(action.type) {
        case ActionType.GET_AUTHORS_RESPONSE:
            console.log(action.authors)
            console.log(Object.assign([], action.authors))
            return {...state, authors: Object.assign([], action.authors)};

        default: return state;
    }
};


export default authorReducer;