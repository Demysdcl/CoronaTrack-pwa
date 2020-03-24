import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLogged } from './actions/AuthActions';

import Routes from './routes';
import history from './services/history';

export default function App() {
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(isLogged());
  });

  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
