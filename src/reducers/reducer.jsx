

 const reducer = (state,action) => {
  switch (action.type) {
    case 'FETCH_FILMS_REQUEST':
      console.log(`загрузка в тру`);
      
      return {
        films:[],
        loading:true,
        error:null
      }
      case 'FETCH_FILMS_SUCCESS':
        return {
          films:action.payload,
          loading:false,
          error:null
        }
        case 'FETCH_FILMS_FAILURE':
          return {
            films:[],
            loading:false,
            error:action.payload
          }
    default:
      return state
  }
}

export default reducer;