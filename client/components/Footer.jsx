import React from 'react';
import './Footer.less'

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 text-center">
              <p className="text-muted">Copyright &copy; Zach Verbeck 2015</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}