import React, {Component} from 'react';
import {Link} from 'react-router';
import './Modal.less';

export default class Modal extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                  <div className="modal-body">
                      <h2>oscl8r</h2>
                      <hr className="star-primary" />
                      <img src="img/oscl8r.png" className="img-responsive img-centered" alt="" />
                      <p>
                        In October 2014, I participated in Dubhacks, the largest hackathon in the Pacific Northwest.
                        I spent my time creating a synthesizer using the Leap Motion API and the Web Audio API. 
                        This was my first experience using the Leap Motion API, but as I read through documentation and became familiar with the functions I quickly mapped them to useful features in the synthesizer.
                      </p>
                      <p>
                        Oscl8r is a project thinking about music creation for the future - focusing on hand gestures to change the pitch, oscillation, and vibrato to effect synthesizer and drum sounds. We wanted to allow users to have a more engaging and immersive environment in which they can create music easily without being tied down to a mouse and keyboard.
                      </p>
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