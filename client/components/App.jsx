import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import Blog from 'components/Blog/Blog';
import Post from 'components/Blog/Post';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import Modal from 'components/Modal';
import Router from 'react-router';
import { DefaultRoute, Route, RouteHandler } from 'react-router';
import './App.less';


class App extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <div className="page">
        <RouteHandler {...this.props}/>
      </div>
      <Footer />
    </div>
    );
  }
}

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="main" handler={Main}/>
    <Route name="projects" path="/projects" handler={Projects}/>
    <Route name="blog" path="/blog" handler={Blog} />
    <Route name="post" path="/post/:post_id" handler={Post} />
    <Route name="project" path="/projects/:project_name" handler={Modal} />
  </Route>
);

Router.run(routes, function (Handler, state) {
  React.render(<Handler params={state.params}/>, document.body);
});