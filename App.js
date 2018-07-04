import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoDatailScreen from './src/screens/MemoDatailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SighupScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});
