import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './src/components/Header';

import Home from './src/screens/Home';
import Sign from './src/screens/Sign';
import LandingPage from './src/screens/LandingPage';
import OtpPage from './src/screens/Otp';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing Page"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={OtpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
