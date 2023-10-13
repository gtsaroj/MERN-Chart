
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './page/Homepage';
import Chat from './page/Chat';


function App() {
  return (

    <div className="App">

      <Route path="/" component={Homepage} exact />
      <Route path="/chat" component={Chat} />

    </div>
  );
}

export default App;
