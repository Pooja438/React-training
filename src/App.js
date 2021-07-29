import logo from './logo.svg';
import './App.css';
import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Login />
      <Home /> */}
      <Switch>
        <Route path="/" exact name="Login" component={Login} />
        {/* <Route path="/home" name="Home" component={Home} /> */}
        <Route path="/home" name="Home" render={(props) => <Home {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
