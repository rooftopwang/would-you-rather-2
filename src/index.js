import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import {Provider} from 'react-redux'; 
import reducer from './reducer';
import middleware from './middleware'; 
import {createStore} from 'redux';

const store = createStore(reducer, middleware)

ReactDOM.render(
        <Provider store = {store}>
            <App />
        </Provider>, document.getElementById('root')
    );

