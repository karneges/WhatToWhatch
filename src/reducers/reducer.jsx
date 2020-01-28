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
        films:action.payload,

      };
    case "FETCH_FILMS_FAILURE":
      return {
        films: [],
        loading: false,
        error: action.payload,
        myFilmList:[]
      };
    case "ADD_FILM_ON_MY_LIST":
      if(state.myFilmList.find((item)=>item.id === action.payload.id) ) {
        return {...state}
      }
      return {
        ...state,
        myFilmList:[...state.myFilmList,action.payload]
      };
      case "DELETE_FILM_ON_MY_LIST":
        return {
          ...state,
          myFilmList:[...state.myFilmList.slice(0,action.payload.id-1),
            ...state.myFilmList.slice(action.payload.id-1)]
        };
    default:
      return state;
  }
};

export default reducer;


