import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr class="small" />

        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-lg-offset-1 text-center">
              <p>Made w/ love in Seattle, WA</p>
              <ul class="list-unstyled">
                <li><i class="fa fa-phone fa-fw"></i> 206 313-9989</li>
                <li><i class="fa fa-envelope-o fa-fw"></i><a href="mailto:zgv@uw.edu">zgv@uw.edu</a></li>
              </ul>
              <br />
              <p class="text-muted">Copyright &copy; Zach Verbeck 2015</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}