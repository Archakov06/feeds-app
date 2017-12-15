import axios from 'axios';

export const fetchPosts = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
    dispatch({
      type: 'POSTS.SET_ITEMS',
      payload: data,
    });
  });
};
