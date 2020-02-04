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