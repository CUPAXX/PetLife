/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlashMessage from 'react-native-flash-message';

const Main = () => {
  return (
    <>
      <App />
      <FlashMessage position="top" />
    </>
  );
};

AppRegistry.registerComponent(appName, () => Main);
