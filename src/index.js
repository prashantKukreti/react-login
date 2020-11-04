import React from 'react'
import ReactDom from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';

import { BrowserRouter}from 'react-router-dom'

import App from './App';

const store= createStore(reducer);

const app=(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
)

ReactDom.render(app, document.getElementById('root'));