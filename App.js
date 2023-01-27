import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet,View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';

export default function App() {
  
  return <NativeRouter><Main/></NativeRouter>
}