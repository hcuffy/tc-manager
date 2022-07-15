// @ts-nocheck
import React from 'react';
import {createLogger} from 'redux-logger';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {
    createStore, applyMiddleware
} from 'redux';

import App from './App';
import rootReducer from './App/rootReducer';
import './i18n';

const middleware = [];
const logger = createLogger({level: 'info', collapsed: true});

middleware.push(thunk);

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(rootReducer,
                                        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
