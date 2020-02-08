import { getUserData, setUserData } from "../services/api-users";
import { useContext } from "react";
import { FilmContext } from "../contexts/film-context-service";
import {
  userLoading,
  userError,
  userLogin,
  allUsersData
} from "../action/action-creater";
import { RegistrationUser } from "../utils/utils";
import {
  wrongEmailOrPassword,
  wrongUserName
} from "../constance/authoriazationMessages";
import { useCallback } from "react";

const useUsersService = () => {
  const [{ allUserData, user }, dispatch] = useContext(FilmContext);

  const checkingUser = (name, password) => {
    dispatch(userLoading());
    let currentUser = "";
    getUserData().then(dataUsers => userCheker(dataUsers));

    const userCheker = dataUsers => {
      dispatch(allUsersData(dataUsers));
      for (let i in dataUsers) {
        if (i === name && dataUsers[i].userData.password === password) {
          currentUser = dataUsers[i];
        }
      }
      if (currentUser) {
        dispatch(userLogin(currentUser));
      } else {
        dispatch(userError(wrongEmailOrPassword));
      }
    };
  };

  const updateUser = useCallback(
    userName => {
      dispatch(userLoading());
      getUserData().then(dataUsers => {
        userUpdater(dataUsers);
      });
      const userUpdater = dataUsers => {
        dispatch(allUsersData(dataUsers));
        dispatch(userLogin(dataUsers[userName]));
      };
    },
    [dispatch]
  );

  const registerUser = async (name, password) => {
    dispatch(userLoading());
    const newUser = new RegistrationUser(name, password);
    const dataUsers = await getUserData().then(res => res);

    if (Object.keys(dataUsers).filter(item => item === name).length > 0) {
      dispatch(userError(wrongUserName));
      return;
    }
    const newData = await setUserData({ ...dataUsers, ...newUser });
    dispatch(userLogin(newData[name]));
    dispatch(allUsersData(newData));
  };

  const addUserContent = async () => {
    allUserData[user.userData.userName] = {
      ...allUserData[user.userData.userName],
      ...user
    };

    const newData = await setUserData({ ...allUserData });
    dispatch(allUsersData(newData));
  };

  return { checkingUser, registerUser, updateUser, addUserContent };
};

export default useUsersService;
