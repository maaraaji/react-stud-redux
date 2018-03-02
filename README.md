# REDUX - Undestanding it

![Redux.pdf](redux-flow.svg)


> Redux is a standalone package and it can work without React. To use redux, we need Redux

```javascript
const redux = require ('redux');
const createStore = redux.createStore;
```
Below are the details of different components of Redux.

### Reducers
1. It is the only thing that is strongly connected to the store. It holds the logic when to update the state.
2. Action is the javascript object that has the type and other payload objects
3. The logic is binded to action.type. Example below.
```javascript
const initialState = {
    counter: 0
}
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
```

### Store
1. it will take reducer as the parameter.
2. Since it takes reducer as a parameter, the reducer needs to be created and available before creating the store.
```javascript
const store = createStore(rootReducer);
```

### Subscriptions
1. It elminates the need to asking getState to understand the state change
2. It will inform me whenever the state changes if subscribe to it.
3. Subscribe take function as argument
4. Subscrition is setup right after the store is created so that we will get the details from initial state.
```javascript
store.subscribe( () => {
    console.log(`You are subscribed and here is your detail`)
    console.log(store.getState());
})
```

### Dispactch 
1. Dispatch Action - Code Dispatching an action
2. Action is an javascript object
3. 'type' property is must and important. The value is an unique identifier and the convention is use all UPPER CASE
```javascript
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 5});
```


