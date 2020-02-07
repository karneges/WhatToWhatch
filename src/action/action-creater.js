import getFilms from "../services/api-services";

const fetchFilmsRequest = () => {
  return {
    type: 'FETCH_FILMS_REQUEST'
  }
};

const fetchFilmsSuccess = (filmsData) => {
  return {
    type: 'FETCH_FILMS_SUCCESS',
    payload: filmsData
  }
}
const fetchFilmsFailure = (error) => {
  return {
    type: 'FETCH_FILMS_FAILURE',
    payload: error
  }
}
const addFilmOnMyList = (film) => {
  return {
    type: 'ADD_FILM_ON_MY_LIST',
    payload: film
  }
}
const deleteFilmOnMyList = (film) => {
  return {
    type: 'DELETE_FILM_ON_MY_LIST',
    payload: film
  }
}

const fetchingBooks = (dispatch) => {
  dispatch(fetchFilmsRequest)
  getFilms()
    .then((res) => dispatch(fetchFilmsSuccess(res.data)))
    .catch((error) => dispatch(fetchFilmsFailure(error)))
}

const userLoading = () => {
  return {
    type: "FETCH_USER_REQUEST",
  }
}
const userLogin = (user) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: user
  }
}

const userError = (error) => {
  return {
    type: "FETCH_USER_ERROR",
    payload: error
  }
}



export {
  fetchingBooks,
  addFilmOnMyList,
  deleteFilmOnMyList,
  userLogin,
  userError,
  userLoading
}