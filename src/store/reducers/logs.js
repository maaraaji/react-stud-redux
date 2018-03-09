import * as actionTypes from '../actions';
// import axios from 'axios';

const initialState = {
    logs: []
}

const logsReducer = ( state = initialState, action ) => {
    let updatedLogs = [];
    switch(action.type){
        case actionTypes.LOG_RESULT:
            updatedLogs = state.logs.concat({id: new Date(), value: action.value})
            //THE BELOW ASYNC CODE WILL NOT WORK
            // axios.get("https://jsonplaceholder.typicode.com/posts/").then (response => {
            //     console.log(response);
            //     return {
            //         ...state,
            //         logs: updatedLogs
            //     }
            //   });
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