const initialState = {
  items: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'USERS.SET_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
