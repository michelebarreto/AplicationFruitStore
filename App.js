
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/pages/Home/Home';

function App() {
  return <SafeAreaView style={style.tela}>
  <Home />

  </SafeAreaView>
}
const style = StyleSheet.create({
  tela: {
    flex:1,
  }
})

export default App;