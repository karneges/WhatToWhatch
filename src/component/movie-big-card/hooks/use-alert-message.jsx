import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useAlertMessage = () => {
  const [displayState, setDisplayState] = useState(`none`);
  const [timerId, setTimerId] = useState();
  const onAlertHandler = () => {
    setDisplayState(`block`);
    setTimerId(
      setTimeout(() => {
        setDisplayState(`none`);
      }, 2000)
    );
  };
  useEffect(() => {
    return () => clearTimeout(timerId);
  }, [timerId]);
  const LoginMessage = () => {
    return (
      <div style={{ display: displayState }} className="alert-message">
        Please Login
      </div>
    );
  };

  return { onAlertHandler, LoginMessage };
};
export default useAlertMessage;
