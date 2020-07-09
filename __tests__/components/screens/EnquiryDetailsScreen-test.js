import React from 'react';
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import EnquiryDetailsScreen from '../../../src/components/screens/EnquiryDetailsScreen';

const mockStore = configureStore([]);

describe('EnquiryDetailsScreen Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  const name = 'Arjun';
  const enqId = '4567';
  const isStarted = false;
  const phoneNumber = '+919878989898';
  const isFree = true;
  const location = 'Home';
  it('Should compare snapshot', () => {
    let root;
    renderer.act(() => {
      root = renderer.create(
        <Provider store={store}>
          <NavigationContainer>
            <EnquiryDetailsScreen
              item={{
                name,
                enqId,
                isStarted,
                phoneNumber,
                isFree,
                location,
                categoryName: '',
                classLocPref: '',
                createdOn: '',
                postedOn: '',
                tag: '',
              }}
            />
          </NavigationContainer>
        </Provider>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
