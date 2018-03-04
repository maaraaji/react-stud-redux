import * as actionTypes from '../actions';

const initialState = {
    logs: []
}

const logsReducer = ( state = initialState, action ) => {
    let updatedLogs = [];
    switch(action.type){
        case actionTypes.LOG_RESULT:
            updatedLogs = state.logs.concat({id: new Date(), value: action.value})
            return {
                ...state,
                logs: updatedLogs
            }
        case actionTypes.DEL_LOG_RESULT:
            updatedLogs = state.logs.filter( value => value.id !== action.id )
            return {
                ...state,
                logs: updatedLogs
            }
        default:
            return state;
    }
}

export default logsReducer;