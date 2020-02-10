import { useEffect } from 'react';
import { useContext } from 'react';
import { FilmContext } from '../contexts/film-context-service';
import useLocalStorage from './useLocalStorage';
import useUsersService from './useUsersService';

const useCheckUser = () => {
  const [{user}] = useContext(FilmContext)
  const [userToken] = useLocalStorage(`userToken`)
  const {updateUser} = useUsersService()
  useEffect(() => {
    if (!user && user !== '' && userToken) {

      updateUser(userToken);
    }
  }, [updateUser, user, userToken]);
}

export default useCheckUser;