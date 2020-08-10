import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index'; 
import Main from './components/Main';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Main />
    </Provider>
    )
  }
}
