
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';
import Main from './Components/Main';

 function App() {
  

  return  (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}
export default App;

