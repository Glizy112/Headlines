import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/details/:id' component={Details}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
