import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleTime from "./SimpleTime/Frontend";

export default function App() {
  return (
    <SimpleTime />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
