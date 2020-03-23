import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';

import SignUp from './pages/SingUp';

// Services
import history from './services/history';

import GlobalStyle from './styles/global';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}
