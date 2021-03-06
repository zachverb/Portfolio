import React from 'react';
import './Main.less';

export default class Main extends React.Component {
  render() {
    return (
    <div id="main">
      <div className="circular"></div>
      <h1>Zachary Verbeck</h1>
      <h3>Software Developer</h3>
      <p id="bio">
        I am a Software Engineer currently working at <strong>Uber</strong>. I am passionate about developing beautiful UIs in React.
        I want to continue learning at every opportunity I get.
      </p>
      <div id="links" className="row row-centered">
        <div className="col-md-4 col-xs-12 icon">
          <a href="https://github.com/zachverb">
						<span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-github-alt fa-stack-1x fa-inverse"></i>
            </span>
            <p>github</p>
          </a>
        </div>
        <div className="col-md-4 col-xs-12 icon">
          <a href="https://www.linkedin.com/pub/zachary-verbeck/89/62b/b61">
						<span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
            <p>linkedin</p>
          </a>
        </div>
        <div className="col-md-4 col-xs-12 icon">
          <a href="pdf/zach_verbeck_resume.pdf" target="_blank">
						<span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-file-text-o fa-stack-1x fa-inverse"></i>
            </span>
            <p>resume</p>
          </a>
        </div>
      </div>
    </div>
    );
  }
}