import * as ActionTypes from './ActionTypes';

export const Feedback = (state= {} , action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var feedbk = action.payload;
            return {...state, feedback: state.feedback.concat(feedbk)}; // concat creates a new object, does not modify the actual object
    }
}