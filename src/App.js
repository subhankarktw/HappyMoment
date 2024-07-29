import { Provider } from 'react-redux';
import './App.css';
import Rout from './Router/Router';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Rout />
    </Provider>
  );
}

export default App;
