import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Auth from './Auth';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Auth />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
