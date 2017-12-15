import axios from 'axios';

export const fetchComments = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then(({ data }) => {
      dispatch({
        type: 'COMMENTS.SET_ITEMS',
        payload: data,
      });
    });
};
