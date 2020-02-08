import { useRouteMatch } from "react-router-dom";
import { getCurrentFilm } from "../utils/utils";
import { useContext } from "react";
import { FilmContext } from "../contexts/film-context-service";

export const useCurrentFilm = () => {
  const [{films}] = useContext(FilmContext)
  const match = useRouteMatch()

  if(films[0]) {
    return  getCurrentFilm(match,films)
  }
  return {}
}
