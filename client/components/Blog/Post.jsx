import './Post.less';
import React from 'react';
import Markdown from 'react-markdown-to-html';

export default class Post extends React.Component {
  render() {
    let post_id = this.props.params.post_id;
    return (
      <div id="post">
        <Markdown src={`posts/${post_id}.md`} />
      </div>
    );
  }
}