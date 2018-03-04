const initialState = {
    counter: 177
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
        default:
            return state
    }
    return state;
}

export default reducer