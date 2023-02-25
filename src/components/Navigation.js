import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/">All</NavLink></li>
        <li><NavLink to="/workshop">Workshop</NavLink></li>
        <li><NavLink to="/activity">Activity</NavLink></li>
        <li><NavLink to="/tech_talk">Tech Talk</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
