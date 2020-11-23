import './App.css';
import Users from './containers/Users';
import store from './redux/store';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Users />
      </div>
    </Provider>
  );
}

export default App;
