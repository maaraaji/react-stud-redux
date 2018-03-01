const redux = require ('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Action - Code Dispatching an action

// Reducers - It is the only thing that is strongly connected to the store. It holds the logic when to update the state
const rootReducer = (state = initialState, action) => {
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscriptions