import React, {Component} from 'react';
import {Link} from 'react-router';
import Markdown from 'react-markdown-to-html';
import './Modal.less';

export default class Modal extends Component {
  render() {
    let {project_name} = this.props.params;
    let src = `projects/${project_name}.md`;
    let title = project_name.split('_').map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    return (
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                  <div className="modal-body">
                      <h2>{title}</h2>
                      <hr className="star-primary" />
                      <img src={`img/${project_name}.png`} className="img-responsive img-centered" />
                      <Markdown src={src} />
                      <ul className="list-inline item-details">
                        <li>Date:
                          <strong> October 2014</strong>
                        </li>
                        <li>Skills:
                          <strong> Javascript, APIs</strong>
                        </li>
                        <li>Github: 
                          <strong>
                            <a href="https://github.com/zachverb/oscl8r"> osl8r</a>
                          </strong>
                        </li>
                      </ul>
                      <Link to="projects" className="btn btn-default"><i className="fa fa-times"></i> Close</Link>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}