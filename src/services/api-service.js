import Axios from "axios"
import {
  useCallback, useState, useEffect
} from "react";



// const getResource = useCallback(async (url) => {
//     const res = await Axios('https://htmlacademy-react-2.appspot.com/wtw/films')
//     return res
// },[])
// export default getResource


const useFetch = () => {
  const url = "https://htmlacademy-react-2.appspot.com/wtw/films";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);
  useEffect(() => {
    let skipGetRequestAfterDestroy = false;

    if (!isLoading) {
      return;
    }
    Axios(url)
      .then(res => {
        if (!skipGetRequestAfterDestroy) {
          setIsLoading(false);
          setResponse(res.data);
        }
      })
      .catch(error => {
        if (!skipGetRequestAfterDestroy) {
          setIsLoading(false);
          setError(error.response.data);
        }
      })
    return () => {
      skipGetRequestAfterDestroy = true
    }
  }, [isLoading, url, options]);

  return [{
    isLoading,
    response,
    error
  }, doFetch];
};

export default useFetch;




