// @ts-nocheck
import React from 'react';
import {createLogger} from 'redux-logger';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {createHashHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import createRootReducer from './App/rootReducer';
import './i18n';

const middleware = [];
const logger = createLogger({level: 'info', collapsed: true});
const history = createHashHistory();
const rootReducer = createRootReducer(history);

middleware.push(thunk);

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const router = routerMiddleware(history);
middleware.push(router);

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(rootReducer,
                                        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
