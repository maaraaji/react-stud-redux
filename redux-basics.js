const redux = require ('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}


// Reducers
// It is the only thing that is strongly connected to the store. It holds the logic when to update the state
// Action is the javascript object.
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INC_COUNTER':
            console.log(`In ${action.type} type`);
            return {
                ...state,
                counter : state.counter + 1
            }
            break;
        case 'ADD_COUNTER':
            console.log(`In ${action.type} type`);
            return {
                ...state,
                counter : state.counter + action.value
            }
    }
    // console.log(action);
    return state;
}

// Store
// it will take reducer as the parameter.
const store = createStore(rootReducer);
console.log(store.getState());

// Dispactch 
// Dispatch Action - Code Dispatching an action
// Action is an javascript object
// 'type' property is must and important. The value is an unique identifier and the convention is use all UPPER CASE
store.dispatch({type: 'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type: 'ADD_COUNTER', value: 5});
console.log(store.getState());


// Subscriptions