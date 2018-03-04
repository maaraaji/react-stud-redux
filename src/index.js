import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/counter';
import logsReducer from './store/reducers/logs';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    logs: logsReducer
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
