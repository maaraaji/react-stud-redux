const redux = require ('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}


// Reducers - It is the only thing that is strongly connected to the store. It holds the logic when to update the state
const rootReducer = (state = initialState, action) => {
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Action - Code Dispatching an action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 5});
console.log(store.getState());
// Subscriptions