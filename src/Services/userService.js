let REGISTER_API = 'http://localhost:4000/register'
let LOGIN_API = 'http://localhost:4000/login'

export const userRegister = (info) =>
  fetch(REGISTER_API, {
    method: 'POST',
    body: JSON.stringify(info),
    headers:{
      'content-type': 'application/json',
    }})
    .then(response => console.log(response.json()))

export const userLogin = (info) =>
    fetch(LOGIN_API, {
      method: 'POST',
      body:JSON.stringify(info),
      headers:{
        'content-type': 'application/json',
      }
    }).then(response => {
      if (response.ok){
        return "success"
      }
      else {return response.json()}})
