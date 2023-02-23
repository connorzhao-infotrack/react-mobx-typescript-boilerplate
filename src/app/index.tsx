import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { ParentWithContext } from './containers/propDrilling/ParentWithContext';
import { ParentContainer } from './containers/propDrilling';
import { Nesting } from './containers/nesting/Nesting';
import { AsyncDemo } from './containers/asyncDemo/AsyncDemo';

// render react DOM
export const App = hot(({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/propDrilling" component={ParentContainer} />
        <Route path="/context" component={ParentWithContext} />
        {/* https://codesandbox.io/s/loving-wilbur-enj6v?from-embed=&file=/src/App.js */}
        {/* The use of !important is considered an anti-pattern and bad practice. !important overrides all other declarations and makes the CSS code more difficult to maintain and debug. The only thing that can override an !important is another !important, and once you go down that road, it never stops. */}
        <Route path="/nesting" component={Nesting} />
        <Route path="/async" component={AsyncDemo} />
        {/* do not cusomtize zenith component */}
      </Switch>
    </Router>
  );
});
