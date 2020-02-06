import { getUserData, setUserData } from "../services/api-users";
import { useContext } from "react";
import { FilmContext } from "../contexts/film-context-service";
import { userLogin, userError } from "../action/action-creater";
import { RegistrationUser } from "../utils/utils";

const useUsersService = () => {
  const [globalState, dispatch] = useContext(FilmContext);

  const checkingUser = (name, password) => {
    let currentUser = "";
    getUserData().then(dataUsers => userCheker(dataUsers));

    const userCheker = dataUsers => {
      for (let i in dataUsers) {
        if (i === name && dataUsers[i].userData.password === password) {
          currentUser = dataUsers[i];
        }
      }
      if (currentUser) {
        dispatch(userLogin(currentUser));
      } else {
        dispatch(userError());
      }
    };
  };

  const registerUser = async (name, password) => {
    const newUser = new RegistrationUser(name, password);
    const dataUsers = await getUserData().then(res => res);

    const newData = await setUserData({ ...dataUsers, ...newUser });
    console.log(newData);
  };

  return { checkingUser, registerUser };
};

export default useUsersService;
