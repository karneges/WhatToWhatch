import { useState, useEffect } from "react"

const useLocalStorage = (key,initialValue='') => {
  const [value,setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue
  });

console.log(value);



  useEffect(() => {
    localStorage.setItem(key,value)    
  },[value,key])

  return [value,setValue]
}

export default useLocalStorage;