import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './store/reducers/counter';
import logsReducer from './store/reducers/logs';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer,
    logs: logsReducer
})

// // if we connect this middle using the function provided by redux, it will execute our middle ware function and give us the store,
// // hence passing store as an argument to this function body
// const logger = store => {
//     console.log('[logger function] that gets store ', store);
//     // we will return another function called next (name is upto you, since we are telling it what to do next we name it as next)
//     return next => {
//         console.log('[function] that get next as argument ', next)
//         // the next function will return another function by giving the action that we dispatch to it
//         return action => {
//             console.log('[function] that gets action as argument ', action)
//             // from here we will have action to next as well as action as well as store. So we can modify both before we giving it to reducer but need
//             // to do it with caution as it will break the work-flow.
//             const result = next(action);
//             console.log('[Middleware] next state ', store.getState());
//             // we are sumply calling the next function with action as argument to proceed with its normal workflow to reducer.
//             return result;
//         }
//     }
// }

//THUNK alike custom middleware
const logger = store => next => action => {
    if (typeof action === 'function' ){
        console.log(store);
        return action(next, store.getState);
    }
    next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
