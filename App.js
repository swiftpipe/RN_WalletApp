/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navigator from './src/navigation';

const App = () => {
  return <Navigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
