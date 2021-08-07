import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom"
import LoginPage from './pages/Login-page';
import AboutPage from './pages/About-page';
import UserPage from './pages/User-page';
function App() {
  return (
<Router>
  <nav>
    <ul>
      <li>
        <Link  to="/login"> Login</Link>
      </li>
      <li>
        <Link to="/"> About</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
    </ul>
  </nav>
  <Switch>
    <Route path="/login">
      <LoginPage/>
    </Route>
    <Route path="/users">
      <UserPage/>
    </Route>
    <Route path="/">
      <AboutPage/>
    </Route>

  </Switch>

</Router>

  );
}

export default App;
