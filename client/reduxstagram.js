import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// >>> Use sentry for error tracking & insights
/* import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'asdfas9d08f',
    userLevel: 'editor'
  }
}).install();

// NOTE: Can use a try/catch or promise instead of throwing the error
logException(new Error('download failed!'), {
  email: 'X@AlexanderApostolov.com'
});

// Instead of "logException" with a stack trace, use the simpler
Raven.captureMessage('Something bad happened!');

// Pop-up for user feedback
Raven.showReportDialog(); */
// <<<

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
