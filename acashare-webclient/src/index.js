import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './Authentication/_helpers';
import  {App } from './Components/App';

// setup fake backend
import { configureFakeBackend } from './Authentication/_helpers';
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);