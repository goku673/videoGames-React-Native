import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';
import LoadingScreen from './Components/LoadingScreen';

 function App() {
  return  (
    <Provider store={store}>
      <LoadingScreen navigation={'pgag'}/>
    </Provider>
  )
}
export default App;

