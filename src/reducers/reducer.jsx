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

      
      if (
       Array.from(state.user.userContent.myFilmList).find(
          item => item.id === action.payload.id)
      ) {
        return { ...state };
      }
      const {user} = state
      const newUser = {userContent:{
        myFilmList:[]
      }}
      newUser.userContent.myFilmList = [...Array.from(user.userContent.myFilmList),action.payload]
      console.log(user.userContent === newUser.userContent);
      
      return {
        ...state,
        user: {
          ...user,...newUser
        }
      };
    case "DELETE_FILM_ON_MY_LIST":
      console.log(`deletFilm`);
      
      const deleteFilmId = action.payload.id;
      const newMyFilmList = state.user.userContent.myFilmList.filter(
        ({ id }) => id !== deleteFilmId
      );
      return {
        ...state,
        user: {
          ...state.user,
          ...state.user.userContent,
          ...state.user.userContent.myFilmList = newMyFilmList
        }
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        userError: null,
        user: action.payload,
        userLoading: false
      };
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        userError: null,
        userLoading: true
      };
    case "FETCH_USER_ERROR":
      return {
        ...state,
        userError: action.payload,
        userLoading: false
      };
      case "USER_LOAGAUT":
        return {
          ...state,
          user:''
        };
    case "FETCH_ALL_USER_SUCCESS":
      return {
        ...state,
        allUserData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
