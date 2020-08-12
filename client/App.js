import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index'; 
import Main from './components/Main';
import { StatusBar } from 'expo-status-bar';
import { View,AppRegistry, StyleSheet } from 'react-native'
import Login from './components/loginPage/Login'

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
        </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
  }
})

AppRegistry.registerComponent('wow', () => App);

// const store = createStore(reducer);

// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//       <Main />
//     </Provider>
//     )
//   }
// }
