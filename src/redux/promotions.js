// import {PROMOTIONS} from '../shared/promotions';
import * as ActionTypes from './ActionTypes';


export const Promotions = (state = {
        isLoading: true,
        errMess: null,
        promotions: []
    }, action) => {
    switch(action.type) {
        
        case ActionTypes.ADD_PROMOS:
            return{ ...state, isLoading:false, errMess: null, promotions:action.payload}
        case ActionTypes.PROMOS_LOADING:
            return{ ...state, isLoading:true, errMess: null, promotions:[]}//new object state is created, and changes are done in new one, /(changes are the one after 1st parameter)
        case ActionTypes.PROMOS_FAILED:
            return{ ...state, isLoading:false, errMess: action.payload, promotions:[]}
        
        default:
            return state;
    }
}