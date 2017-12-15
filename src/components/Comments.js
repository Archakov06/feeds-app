import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

import getUserById from '../libs/getUserById';

const Comments = ({ items }) => (
  <div className="comments">
    <Header as="h3" dividing>
      Comments ({items.length})
    </Header>
    <Comment.Group size="small">
      {items.map((comment, key) => (
        <Comment key={key}>
          <Comment.Avatar as="a" src="https://picsum.photos/50/50" />
          <Comment.Content>
            <Comment.Author as="a">{comment.email}</Comment.Author>
            <Comment.Text>{comment.body}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  </div>
);

export default Comments;
