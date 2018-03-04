import * as actionTypes from '../actions';

const initialState = {
    counterValue: 0
}

const counterReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            console.log('INCREMENT TYPE');
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counterValue: state.counterValue - 1
            }
        case actionTypes.ADD_FIVE:
            return {
                ...state,
                counterValue: state.counterValue + 5
            }
        case actionTypes.SUB_FIVE:
            return {
                ...state,
                counterValue: state.counterValue - 5
            }
        default:
            return state
    }
}

export default counterReducer