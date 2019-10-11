import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import {
  Home,
  Explore,
  Messages,
  Settings,
  Whoops404
} from './pages';

import * as serviceWorker from './serviceWorker';

window.React = React
ReactDOM.render(
  <HashRouter>

    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/settings" component={Settings} />
        <Route component={Whoops404} />
      </Switch>
    </div>

  </HashRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
