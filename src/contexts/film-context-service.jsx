import React from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';
import reducer from '../reducers/reducer';



export const FilmContext = createContext()

const initialState = {
  loading:true,
  error:false,
  films:[]
}

export const FilmContextProvider = ({children}) => {
  const store = useReducer(reducer,initialState)
  return (
    <FilmContext.Provider value={store}>
      {children}
    </FilmContext.Provider>
  )
}