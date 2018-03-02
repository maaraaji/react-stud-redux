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
            break;
        default: 
            return state;
    }
    // console.log(action);
    return state;
}

// Store
// it will take reducer as the parameter.
// Since it takes reducer as a parameter, the reducer needs to be created and available before creating the store.
const store = createStore(rootReducer);
// console.log(store.getState());

// Subscriptions
// It elminates the need to asking getState to understand the state change
// It will inform me whenever the state changes if subscribe to it.
// Subscribe take function as argument
// Subscrition is setup right after the store is created so that we will get the details from initial state.
store.subscribe( () => {
    console.log(`You are subscribed and here is your detail`)
    console.log(store.getState());
})

// Dispactch 
// Dispatch Action - Code Dispatching an action
// Action is an javascript object
// 'type' property is must and important. The value is an unique identifier and the convention is use all UPPER CASE
store.dispatch({type: 'INC_COUNTER'});
// console.log(store.getState());
store.dispatch({type: 'ADD_COUNTER', value: 5});
// console.log(store.getState());


