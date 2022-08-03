import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Welcomepage from './pages/welcomePage';
import NavbarTop from './components/navbarTop';
import DateSelectionPage from './pages/dateSelectionPage';
import MealSelectionPage from './pages/mealSelectionPage';
import NavbarTopWithCart from './components/narbarTopWithCart';
import MealOverviewPage from './pages/mealOverviewPage';

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

        <Route exact path="/dateSelectionPage">
          <NavbarTop />
          <DateSelectionPage />
          <Navbar />
        </Route>

        <Route exact path="/mealSelectionPage">
          <NavbarTopWithCart />
          <MealSelectionPage />
          <Navbar />
        </Route>

        <Route exact path="/mealOverviewPage">
          <NavbarTopWithCart />
          <MealOverviewPage />
          <Navbar />
        </Route>

        
        
      </Switch>
     </div>
    </div>
    </Router> 
  );
}

export default App;
