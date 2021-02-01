import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TextInput, StyleSheet, Button, TouchableHighlight} from 'react-native';
import Home from './components/Home';
import IMC from './components/IMC';
import Perfil from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
