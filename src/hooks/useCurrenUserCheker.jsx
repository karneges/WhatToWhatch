import { getUserData } from "../services/api-users";
import { useContext } from "react";
import { FilmContext } from "../contexts/film-context-service";
import { userLogin } from "../action/action-creater";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useCurrentUserCheker = () => {
  const [userToken, setUserToken] = useLocalStorage(`userToken`);
  const [globalData, dispatch] = useContext(FilmContext);
  const checkingUser = (name, password) => {
    getUserData().then(data => userCheker(data));
    const userCheker = data => {
      for (let i in data.users) {
        if (i === name) {
          if (data.users[i].userData.password === password) {
            dispatch(userLogin(data.users[i]));
          }
        }
      }
    };
  };

  useEffect(() => {
    if (globalData.user) {
      setUserToken((s)=>globalData.user.userData.userName);
    }
  }, [globalData.user, setUserToken]);
  return { checkingUser };
};

export default useCurrentUserCheker;
