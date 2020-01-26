export   const timer = setIsVideo => {
  const timerId = setTimeout(() => {
    setIsVideo(true);
  }, 1000);
  return timerId;
};
