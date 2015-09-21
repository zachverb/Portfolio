import './Post.less';
import React from 'react';
import Markdown from 'react-markdown-to-html';

export default class Post extends React.Component {
  render() {
    let post_id = this.props.params.post_id;
    let src = `./PostText/${post_id}.txt`;
    return (
      <div id="post">
        <Markdown src={src} />
      </div>
    );
  }
}