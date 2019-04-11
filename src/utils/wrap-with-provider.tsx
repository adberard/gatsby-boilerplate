import React from 'react';
import { Provider } from 'react-redux';

// import createStore from './src/ducks/createStore';
import store from '@ducks/store';

// eslint-disable-next-line react/display-name,react/prop-types
const wrapWithProvider = ({ element }: any) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  // const store = createStore();
  return <Provider store={store}>{element}</Provider>;
};

export default wrapWithProvider;
