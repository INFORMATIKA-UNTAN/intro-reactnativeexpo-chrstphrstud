//import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="welcome-text">Hello, React Native!</Text>
      <Text testID="name-text">
        Nama: Christopher Aurellyan Alotano Luna
      </Text>
      <Text testID="nim-text">
        NIM: D1041221093
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f9ff'
  },
});
