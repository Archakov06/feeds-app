const initialState = {
  isReady: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'APP.SET_READY':
      return {
        ...state,
        isReady: action.payload,
      };
    default:
      return state;
  }
}
