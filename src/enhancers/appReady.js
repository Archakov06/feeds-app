export default ({ dispatch, getState }) => next => action => {
  if (
    action.type === 'USERS.SET_ITEMS' ||
    action.type === 'POSTS.SET_ITEMS' ||
    action.type === 'COMMENTS.SET_ITEMS'
  ) {
    setTimeout(() => {
      const { users, posts, comments, app: { isReady } } = getState();
      if (
        users.items.length &&
        posts.items.length &&
        comments.items.length &&
        !isReady
      ) {
        dispatch({
          type: 'APP.SET_READY',
          payload: true,
        });
      }
    });
  }
  return next(action);
};
