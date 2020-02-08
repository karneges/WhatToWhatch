export const timer = setIsVideo => {
  const timerId = setTimeout(() => {
    setIsVideo(true);
  }, 2000);
  return timerId;
};


export const getCurrentFilm = (match, films) => {
  const getIdentificator = () => {
    return Object.values(match.params).filter(item => item > 0)[0];
  };
  return films[getIdentificator() - 1] || films[0];
}


export const getUrlFromChangeInfo = (currentFilm, match) => {
  if (!match.url.includes("film")) {
    return `/film/${currentFilm.id || 1}`;
  }
  return `/${currentFilm.id}`;
};
export class RegistrationUser {
  constructor(name, password) {
    this[name] = {};
    this[name].userData = { userName: name, password: password };
    this[name].userContent = { myFilmList: [], myComents: [] };
  }
}
// export function registrationUser(name, password) {
//   this[name] = {};
//   this[name].userData = { userName: name, password: password };
//   this[name].userContent = { myFilmList: "", myComents: "" };
// }
