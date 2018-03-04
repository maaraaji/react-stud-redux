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
        default:
            return state
    }
    return state;
}

export default reducer