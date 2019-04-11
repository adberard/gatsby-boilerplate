/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';

import sagas from './sagas';

// export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const enhancers = [];
const initialState = {};
const middleware = [
  sagaMiddleware,
  // routerMiddleware(history)
];

if (process.env.NODE_ENV === `development`) {
  if (typeof window !== `undefined`) {
    const devTools =
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__();
    if (devTools) {
      enhancers.push(devTools);
    }
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default createStore(
  createRootReducer(),
  initialState,
  composedEnhancers,
);
sagaMiddleware.run(sagas);
