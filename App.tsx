import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNav from './src/navigators/StackNav';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <StackNav />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
