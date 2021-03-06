




export const getUserData = async () => {

  const res = await fetch("https://api.jsonbin.io/b/5e39ba5ef47af813baceb350/latest", {
    headers: {
      'secret-key': '$2b$10$V6nhp3uZuwzZMz1m2hBJ.ukLJbu3smguZlv3.vMz39mpxab5NJY4W'
    }
  })
  return res.json().then((res) => res)

}
export const setUserData = async (newData) => {

  const res = await fetch("https://api.jsonbin.io/b/5e39ba5ef47af813baceb350", {
    method: 'PUT',
    body:JSON.stringify(newData),
    versioning: false,
    headers: {
      'Content-Type': 'application/json',
      'secret-key': '$2b$10$V6nhp3uZuwzZMz1m2hBJ.ukLJbu3smguZlv3.vMz39mpxab5NJY4W'
    },
  })
  return res.json().then((res) => res.data)

}

