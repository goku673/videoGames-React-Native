import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Navbar from './Navbar';

const Main = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.text}>Hola a todos, ¿cómo están?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Main;