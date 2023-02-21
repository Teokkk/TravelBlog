import React from 'react';

import { LogBox } from 'react-native';
import { Provider } from 'react-redux';

import Navigator from './src/navigations/Navigator';
import store from './src/stores/ConfigureStore';

LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: ...'])

export default function App() {

  //**** Notes: dùng @reduxjs/toolkit' thì khônng cần hàm này
  let configureStore = store()

  return (
    <Provider store={configureStore}>
      <Navigator />
    </Provider>
  )
}