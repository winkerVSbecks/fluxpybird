'use strict';

import React from 'react-native';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';
import App from './src/containers/app.js';

const store = createStore(reducer);

const Root = () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );

}


AppRegistry.registerComponent('flappyTriangle', () => Root);