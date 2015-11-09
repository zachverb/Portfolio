import React from 'react';
import {render} from 'react-dom';
import {Router, IndexRoute, Route} from 'react-router';

import Header from 'components/Header';
import Main from 'components/Main';
import Blog from 'components/Blog/Blog';
import Post from 'components/Blog/Post';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import Modal from 'components/Modal';

import './App.less';


class App extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <div className="page">
        {this.props.children}
      </div>
      <Footer />
    </div>
    );
  }
}

render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="projects">
        <IndexRoute component={Projects} />
        <Route path="project/:project_name" component={Modal} />
      </Route>
      <Route path="blog">
        <IndexRoute component={Blog} />
        <Route path="post/:post_id" component={Post} />
      </Route>
    </Route>
  </Router>
  ), document.getElementById('react'));
