import React from 'react';
import Post from './Post';
import { Link, RouteHandler } from 'react-router';
import './Blog.less';

export default class Blog extends React.Component {
  render() {
    return (
      <section id='blog'>
          <h2>blug</h2>
          <Link to="post" params={{post_id: '1'}}>Hello World</Link>
      </section>
    );
  }
}
