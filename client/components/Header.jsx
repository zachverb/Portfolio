import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="main">Zachary Verbeck</Link>
              </li>
              <li className="page-scroll">
                <Link to="projects">Projects</Link>
              </li>
              <li className="page-scroll">
                <Link to="blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}