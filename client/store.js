import { createStore, compose } from 'redux';
// Hook up react-router with redux
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// Import the root reducer
import rootReducer from './reducers/index';

// Seed data
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
  posts,
  comments
};

// Enhance store so redux dev tools knows about it
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

// Accept HOT reload & re-require the reducer so we don't have to do a page refresh
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    /* You have the use Common.js because it is inside a function,
    not at top level like ES6 imports.
    Require the main reducer */
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
