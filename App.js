import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CourseViewScreen from './app/screens/CourseViewScreen.js';
import InteractiveClassScreen from './app/screens/InteractiveClassScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <InteractiveClassScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
