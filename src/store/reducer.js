const initialState = {
    counter: 177,
    logs: []
}

const reducer = ( state = initialState, action ) => {
    switch (action.type){
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "ADD_FIVE":
            return {
                ...state,
                counter: state.counter + action.value
            }
        case "SUB_FIVE":
            return {
                ...state,
                counter: state.counter - action.value
            }
        case "LOG_RESULT":
            return {
                ...state,
                //push will update the original array whereas concat will return the array thus updating the array immutably
                logs: state.logs.concat({id: new Date(), value: state.counter})
            }
        default:
            return state
    }
}

export default reducer