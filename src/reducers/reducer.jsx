const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FILMS_REQUEST":
      console.log(`загрузка в тру`);

      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_FILMS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        films: action.payload
      };
    case "FETCH_FILMS_FAILURE":
      return {
        films: [],
        loading: false,
        error: action.payload,
        myFilmList: []
      };
    case "ADD_FILM_ON_MY_LIST":
      if (state.myFilmList.find(item => item.id === action.payload.id)) {
        return { ...state };
      }
      return {
        ...state,
        myFilmList: [...state.myFilmList, action.payload]
      };
    case "DELETE_FILM_ON_MY_LIST":
      const { myFilmList } = state;
      const deleteFilmId = action.payload.id;
      const newMyFilmList = myFilmList.filter(({ id }) => id !== deleteFilmId);
      return {
        ...state,
        myFilmList: newMyFilmList
      };
      case "USER_LOGIN": 
      return {
        ...state,
        user:action.payload
      }
    default:
      return state;
  }
};

export default reducer;
