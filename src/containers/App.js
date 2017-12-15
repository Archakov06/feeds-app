import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Item, Container, Loader } from 'semantic-ui-react';

import { fetchPosts } from '../actions/posts';
import { fetchUsers } from '../actions/users';
import { fetchComments } from '../actions/comments';

import getUserById from '../libs/getUserById';

import { Post } from '../components';

const App = ({ posts, users, comments, isReady }) => (
  <div className="wrapper">
    {!isReady ? (
      <Loader size="big" active inline />
    ) : (
      <Container>
        <Item.Group className="posts" divided>
          {posts.map((item, key) => (
            <Post
              key={`post-${key}`}
              {...item}
              user={getUserById(users, item.userId)}
              comments={comments.filter(o => o.postId === item.id)}
            />
          ))}
        </Item.Group>
      </Container>
    )}
  </div>
);

const mapStateToProps = ({ posts, users, comments, app: { isReady } }) => ({
  posts: posts.items,
  users: users.items,
  comments: comments.items,
  isReady,
});

const mapDispatchToProps = {
  fetchPosts,
  fetchUsers,
  fetchComments,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      const { fetchPosts, fetchUsers, fetchComments } = this.props;
      fetchUsers();
      fetchPosts();
      fetchComments();
    },
  }),
)(App);
