import * as actionTypes from './actions';

const initialState = {
    counter: 177,
    logs: []
}

const reducer = ( state = initialState, action ) => {
    switch (action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD_FIVE:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB_FIVE:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.LOG_RESULT:
            //mutating the object can be done as below
            // const updatedState = object.assign({}, state);
            // as a another way, it can be copied using spread operator
            return {
                ...state,
                //push will update the original array whereas concat will return the array thus updating the array immutably
                logs: state.logs.concat({id: new Date(), value: state.counter})
            }
        case "DEL_LOG_RESULT":
            //we can filter the array using splice as below
            // const updatedLogs = state.logs.splice(value.id, 1);
            // alternatively
            const updatedLogs = state.logs.filter( value => value.id !== action.id)
            return {
                ...state,
                logs: updatedLogs
            }
        default:
            return state
    }
}

export default reducer