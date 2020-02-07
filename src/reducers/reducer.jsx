const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FILMS_REQUEST":
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
      case "FETCH_USER_SUCCESS": 
      return {
        ...state,
        userError:null,
        user:action.payload,
        userLoading:false
      }
      case "FETCH_USER_REQUEST": 
      return {
        ...state,
        userError:null,
        userLoading:true
      }
      case "FETCH_USER_ERROR": 
      return {
        ...state,
        userError:action.payload,
        userLoading:false
      }
    default:
      return state;
  }
};

export default reducer;
