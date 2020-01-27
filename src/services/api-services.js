import Axios from "axios";


const getFilms = () => {
  return  Axios("https://htmlacademy-react-2.appspot.com/wtw/films")
}

export default getFilms;
