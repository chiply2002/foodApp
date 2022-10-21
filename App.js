import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLayout from './screens/MainLayout';
import CustomDrawer from './navigation/CustomDrawer';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import rootReducer from './stores/rootReducer';
import OnBoarding from './screens/OnBoarding/OnBoarding';
import { Otp, SignIn, SignUp, ForgotPassword, Home } from './screens';
import FoodDetail from './screens/Food/FoodDetail';

const Stack = createNativeStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
          <Stack.Screen name="Home" component={FoodDetail} />
          <Stack.Screen name="Home1" component={CustomDrawer} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Otp" component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;