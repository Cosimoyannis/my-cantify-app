import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Welcomepage from './pages/welcomePage';
import DateSelectionPage from './pages/dateSelectionPage';
import VisitorChart from './components/visitorChart';
import NavbarTop from './components/navbarTop';

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
        <Route exact path="/dateselectionpage">
          <NavbarTop /> 
          <DateSelectionPage />
          <Navbar />
        </Route>
        <Route exact path="/chart">
          <VisitorChart />
        </Route>
      </Switch>
     </div>
    </div>
    </Router> 
  );
}

export default App;
