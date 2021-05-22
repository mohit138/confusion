import * as ActionTypes from './ActionTypes';


export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return{ ...state, isLoading:false, errMess: null, dishes:action.payload}
        case ActionTypes.DISHES_LOADING:
            return{ ...state, isLoading:true, errMess: null, dishes:[]}//new object state is created, and changes are done in new one, /(changes are the one after 1st parameter)
        case ActionTypes.DISHES_FAILED:
            return{ ...state, isLoading:false, errMess: action.payload, dishes:[]}
        default:
            return state;
    }
}