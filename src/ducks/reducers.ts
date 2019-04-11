import { combineReducers } from 'redux';
// import { RouterState, connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { systemReducer, ISystem } from './system/reducers';

const rootReducer = () =>
  combineReducers({
    // router: connectRouter(history),
    form: formReducer,
    system: systemReducer,
  });

export interface State {
  // router: RouterState;
  system: ISystem;
}

export default rootReducer;
