import axios from 'axios';

export const fetchUsers = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
    dispatch({
      type: 'USERS.SET_ITEMS',
      payload: data,
    });
  });
};
