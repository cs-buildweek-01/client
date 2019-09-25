import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Controls from './components/Controls/Controls';
import Game from './components/Game/Game';
import Home from './components/Home/Home';

const isAuthorized = () => {
  return Boolean(localStorage.getItem('key'));
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/directions' component={Controls} />
      <ProtectedRoute path='/game' component={Game} />
    </Switch>
  );
};

export default Router;
