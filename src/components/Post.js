import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { Item, Label, Button, Popup, Icon } from 'semantic-ui-react';

import { Comments } from './';

const Post = ({
  title,
  body,
  users,
  comments,
  user,
  showComments,
  setShowComments,
}) => (
  <Item>
    <Item.Image src="https://picsum.photos/300/300?random" />
    <Item.Content>
      <Item.Header as="a">{title}</Item.Header>
      <Item.Meta>
        <Popup
          header={user.username}
          trigger={
            <div>
              <Icon name="user" />
              <span className="cinema">{user.username}</span>
            </div>
          }>
          Name: {user.name}
          <br />
          E-Mail: {user.email}
        </Popup>
      </Item.Meta>
      <Item.Description>{body}</Item.Description>
      <Item.Extra>
        <Button onClick={setShowComments}>Comments ({comments.length})</Button>
      </Item.Extra>
      {showComments && <Comments items={comments} />}
    </Item.Content>
  </Item>
);

export default compose(
  withState('showComments', 'setVisibleComments', false),
  withHandlers({
    setShowComments: ({ showComments, setVisibleComments }) => () =>
      setVisibleComments(!showComments),
  }),
)(Post);
