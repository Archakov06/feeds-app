import { combineReducers } from 'redux';

import posts from './posts';
import users from './users';
import app from './app';
import comments from './comments';

export default combineReducers({
  posts,
  users,
  app,
  comments,
});
