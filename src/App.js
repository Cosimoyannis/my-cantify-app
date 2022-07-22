import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Welcomepage from './pages/welcomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
     <div className='content'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/welcomepage">
          <Welcomepage />
        </Route>
      </Switch>
     </div>
    </div>
    </Router> 
  );
}

export default App;
