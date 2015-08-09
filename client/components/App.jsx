import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import Blog from 'components/Blog/Blog';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import Router from 'react-router';
import { DefaultRoute, Route, RouteHandler } from 'react-router';


class App extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <RouteHandler />
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
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});