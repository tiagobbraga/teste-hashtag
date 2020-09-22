import { StatusBar } from 'expo-status-bar';
import React from 'react';

// screen
import Github from './screens/Github';

export default function App() {
  return (
    <>
      <Github />
      <StatusBar style='auto' />
    </>
  );
}
