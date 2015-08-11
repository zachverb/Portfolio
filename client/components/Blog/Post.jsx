import React from 'react';
import Highlight from 'react-highlight';
import './Post.less';

export default class Post extends React.Component {
  render() {
    return (
      <div id="post">
        <h2>{this.props.name}</h2>
        <p>hello world! {this.props.params.post_id}</p>
        <Highlight className='javascript'>
          {
          'for (var i = 0; i < 20; i++) {\n' +
          '  console.log("Hello world!");\n' +
          '}'
          }
        </Highlight>
      </div>
    );
  }
}