import {createStore,applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {changeWeatherCode} from './actions'


// here we are configuring the redux store using reducers and we are applying middlewares like thunk for async actions and loggerMiddleware
//debugging
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

store.dispatch(changeWeatherCode(113))


export default store;
