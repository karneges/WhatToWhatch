import React from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';
import reducer from '../reducers/reducer';
import { useEffect } from 'react';
import { fetchingFilms } from '../action/action-creater';



export const FilmContext = createContext()

const initialState = {
  loading:true,
  error:false,
  films:[],
  myFilmList:[],

}

export const FilmContextProvider = ({children}) => {
  const store = useReducer(reducer,initialState)
  const[,dispatch] = store
  useEffect(() => {
    fetchingFilms(dispatch);
  }, [dispatch]);


  return (
    <FilmContext.Provider value={store}>
      {children}
    </FilmContext.Provider>
  )
}