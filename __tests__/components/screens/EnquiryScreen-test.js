import React from 'react';
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import EnquiryScreen from '../../../src/components/screens/EnquiryScreen';

const mockStore = configureStore([]);

describe('EnquiryScreen Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it('should call getEnquires when mounted', () => {
    const getEnquires = jest.fn();
    let root;
    renderer.act(() => {
      root = renderer.create(
        <Provider store={store}>
          <NavigationContainer>
            <EnquiryScreen {...{getEnquires}} />
          </NavigationContainer>
        </Provider>,
      );
    });
    expect(getEnquires).toHaveBeenCalledTimes(1);
    expect(root.toJSON()).toMatchSnapshot();
  });
});
