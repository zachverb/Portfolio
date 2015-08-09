import React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="services">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-10 col-lg-offset-1">
              <h2>Projects</h2>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <a href="#" data-toggle="modal" data-target="#portfolioModal3"><i className="fa fa-flask fa-stack-1x text-primary"></i></a>
                    </span>
                    <h4>
                      <strong>Loop Space</strong>
                    </h4>
                    <p>An Android application that allows for cross-device music collaboration.</p>
                    <a href="#" className="btn btn-light" data-toggle="modal" data-target="#portfolioModal3">Learn More</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-item">
                                    <span className="fa-stack fa-4x">
                                      <a href="#" data-toggle="modal" data-target="#portfolioModal1"><i className="fa fa-hand-o-up fa-stack-1x text-primary"></i></a>
                                </span>
                    <h4>
                      <strong>oscl8r</strong>
                    </h4>
                    <p>A small Leap Motion synthesizer that is controlled by your hand. Created at Dubhacks 2014.</p>
                    <a href="#" className="btn btn-light" data-toggle="modal" data-target="#portfolioModal1">Learn More</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <a href="#" data-toggle="modal" data-target="#portfolioModal4"><i className="fa fa-space-shuttle fa-stack-1x text-primary"></i></a>
                    </span>
                    <h4>
                      <strong>Space Glove</strong>
                    </h4>
                    <p>A Space Glove that would allow users to control their space suits while in outer space.</p>
                    <a href="#" className="btn btn-light" data-toggle="modal" data-target="#portfolioModal5">Learn More</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <a href="#" data-toggle="modal" data-target="#portfolioModal2"><i className="fa fa-music fa-stack-1x text-primary"></i></a>
                    </span>
                    <h4>
                      <strong>ARP+</strong>
                    </h4>
                    <p>A lightweight HTML5 synthesizer based on the popular Korg Kaossilator.</p>
                    <a href="#" className="btn btn-light" data-toggle="modal" data-target="#portfolioModal2">Learn More</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <a href="#" data-toggle="modal" data-target="#portfolioModal4"><i className="fa fa-shield fa-stack-1x text-primary"></i></a>
                    </span>
                    <h4>
                      <strong>ThoughtLink</strong>
                    </h4>
                    <p>A global platform that would allow IB students to collaborate with students in other schools.</p>
                    <a href="#" className="btn btn-light" data-toggle="modal" data-target="#portfolioModal4">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}