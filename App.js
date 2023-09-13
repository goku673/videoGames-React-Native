import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
export default function App() {
  return  (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}

