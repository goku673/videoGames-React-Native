import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay of 5 seconds
    const timer = setTimeout(() => {
      // Navigate to the home screen
      navigation.replace('Home');
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Spinner type="Wave" color="#00ff00" size={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;