import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import persistReducer from './persistReducer';
import Reducers from '../reducers/index';

const store = createStore(
  persistReducer(Reducers),
  applyMiddleware(ReduxThunk)
);
const persistor = persistStore(store);

export { store, persistor };
