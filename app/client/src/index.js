import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.css';
import axios from 'axios';
import { SWRConfig } from 'swr';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

const fetcher = url => axios.get(url).then(res => res.data);

ReactDOM.render(
    <Provider store={store}>
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                fetcher,
            }}>
            <App />
        </SWRConfig>
    </Provider>,
    document.querySelector('#root')
);