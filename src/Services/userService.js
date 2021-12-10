let REGISTER_API = 'http://localhost:4000/register'
let LOGIN_API = 'http://localhost:4000/login'

export const userRegister = (info) =>
  fetch(REGISTER_API, {
    method: 'POST',
    body: JSON.stringify(info),
    headers:{
      'content-type': 'application/json',
    }})
    .then(response => response.json())

