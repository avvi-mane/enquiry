// @flow
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import EnquiryScreen from './components/screens/EnquiryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EnquiryDetailsScreen from './components/screens/EnquiryDetailsScreen';
import {ENQUIRY_SCREEN, ENQUIRY_DETAILS_SCREEN} from './config/constants';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={ENQUIRY_SCREEN} component={EnquiryScreen} />
          <Stack.Screen
            name={ENQUIRY_DETAILS_SCREEN}
            component={EnquiryDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
