import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import LevelingSystemScreen from './app/screens/LevelingSystemScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LevelingSystemScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
