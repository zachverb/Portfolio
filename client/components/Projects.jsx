import React from 'react';
import {Link} from 'react-router';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIndex: null
    };
  }

  openModal(num) {
    this.setState({modalIndex: num})
  }

  closeModal() {
    this.setState({modalIndex: null});
  }

  render() {
    return (
      <section id="projects" className="services">
        <div className="container">
          <div className="col-lg-10 col-lg-offset-1">
            <h2>Projects</h2>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="service-item">
                  <span className="fa-stack fa-4x">
                    <Link to="project" params={{project_name: 'oscl8r'}}>
                      <i className="fa fa-flask fa-stack-1x text-primary" />
                    </Link>
                  </span>
                  <h4>
                    <strong>Loop Space</strong>
                  </h4>
                  <p>An Android application that allows for cross-device music collaboration.</p>
                  <Link to="project" params={{project_name: 'loop_space'}} className="btn btn-light">Learn More</Link>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="service-item">
                  <span className="fa-stack fa-4x">
                    <Link to="project" params={{project_name: 'oscl8r'}}><i className="fa fa-hand-o-up fa-stack-1x text-primary"></i></Link>
                  </span>
                  <h4>
                    <strong>oscl8r</strong>
                  </h4>
                  <p>A small Leap Motion synthesizer that is controlled by your hand. Created at Dubhacks 2014.</p>
                  <Link to="project" params={{project_name: 'oscl8r'}} className="btn btn-light">Learn More</Link>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="service-item">
                  <span className="fa-stack fa-4x">
                    <Link to="project" params={{project_name: 'space_glove'}}><i className="fa fa-space-shuttle fa-stack-1x text-primary"></i></Link>
                  </span>
                  <h4>
                    <strong>Space Glove</strong>
                  </h4>
                  <p>A Space Glove that would allow users to control their space suits while in outer space.</p>
                  <Link to="project" params={{project_name: 'space_glove'}} className="btn btn-light">Learn More</Link>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="service-item">
                  <span className="fa-stack fa-4x">
                    <Link to="project" params={{project_name: 'arp+'}}><i className="fa fa-music fa-stack-1x text-primary"></i></Link>
                  </span>
                  <h4>
                    <strong>ARP+</strong>
                  </h4>
                  <p>A lightweight HTML5 synthesizer based on the popular Korg Kaossilator.</p>
                  <Link to="project" params={{project_name: 'arp+'}}>Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}