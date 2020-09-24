import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// screen
import SearchUser from './src/screens/SearchUser';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchUser />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
