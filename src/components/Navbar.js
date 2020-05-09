import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../pages/Home';
import Sandbox from '../pages/Sandbox';
import Lessons from '../pages/Lessons';

import './Navbar.css';


function Navbar() {
  return(
    <Router>
      <aside className="menu">
        <Link className="menu-label" to="/">
          Home
        </Link>
        <Link className="menu-label" to="/sandbox">
          Sandbox
        </Link>
        <Link className="menu-label" to="/lessons">
          Lessons
        </Link>
        <ul className="menu-list">
          {/* eslint-disable-next-line */}
          <li className="orange-link"><a>Coming soon</a></li>
        </ul>
      </aside>
      <Switch>
        <Route path="/sandbox">
          <Sandbox />
        </Route>
        <Route path="/lessons">
          <Lessons />
        </Route>
        // <Route path="/">
        //   <Home />
        // </Route>
      </Switch>
    </Router>
  )
}

export default Navbar;
