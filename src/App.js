import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Welcomepage from './pages/welcomePage';

function App() {
  return (
    <Router>
    <div className="App">
     <div className='content'>
      <Switch>
        <Route exact path="/">
          <Welcomepage />
        </Route>
        <Route exact path="/home">
          <Home />
          <Navbar />
        </Route>
      </Switch>
     </div>
    </div>
    </Router> 
  );
}

export default App;
