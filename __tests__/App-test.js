/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {NavigationContainer} from '@react-navigation/native';
import App from '../src/App';

const mockStore = configureStore([]);

describe('App', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it('should renders correctly', () => {
    renderer.create(
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </Provider>,
    );
  });
});
