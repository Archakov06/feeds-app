const initialState = {
  items: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'POSTS.SET_ITEMS':
      // sort() использовал, чтобы разнобразить записи.
      // Так как, у каждого автора было минимум по 5-10 записей.
      // Рандомизировал и обрезал до 10
      return {
        ...state,
        items: action.payload
          .sort(() => 5 > Math.round(Math.random() * 10))
          .slice(0, 10),
      };
    default:
      return state;
  }
}
