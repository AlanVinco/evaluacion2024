import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './router/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import Page404 from './pages/Page404';

const App = () => {

  //Validar si el usuario esta logeado
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" render={props => (
            isLoggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login {...props} />
            )
          )} />
          <PrivateRoute
            path="/"
            exact
            component={Login}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isLoggedIn}
          />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;