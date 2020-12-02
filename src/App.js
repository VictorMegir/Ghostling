import './App.css';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Recipe from './components/Recipe/Recipe';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;