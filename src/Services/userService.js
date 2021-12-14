import {useNavigate} from 'react-router-dom';

let REGISTER_API = 'http://localhost:4000/register'
let LOGIN_API = 'http://localhost:4000/login'
let USER_API = 'http://localhost:4000/user'
let LOGOUT_API = 'http://localhost:4000/logout'

export const userRegister = (info) =>
  fetch(REGISTER_API, {
    method: 'POST',
    body: JSON.stringify(info),
    headers:{
      'content-type': 'application/json',
    }})
    .then(response => {console.log(response); return response.json()})

export const userLogin = (dispatch, info) =>
    fetch(LOGIN_API, {
      method: 'POST',
      body:JSON.stringify(info),
      headers:{
        'content-type': 'application/json',
      }}).then( response=>{console.log("userLogin", response.json); return response.json() })
        .then(user => dispatch({
          type: "user-login",
          user
        }))

// export const isLoggedIn = () =>
//     fetch(USER_API)
//         .then(response => console.log("is logged in ", response))

// export const userLogout = (dispatch) =>
//     fetch(LOGOUT_API)
// .then(response => console.log("is logged out", response))
// .then(user => dispatch({
//   type: "user-logout"
// }))
// .catch(e=>console.log(e))