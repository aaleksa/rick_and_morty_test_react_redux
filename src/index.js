import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import store, { history } from '../src/store/store';
import App from '../src/App.js';

import './index.css';

const target = document.querySelector('#root');

render (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);


