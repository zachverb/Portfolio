import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">Zachary Verbeck</Link>
              </li>
              <li className="page-scroll">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="page-scroll">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}