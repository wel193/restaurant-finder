const user = (state=null, action) =>{
  switch (action.type){
    case 'fetch-user':
      console.log("reducer fetch", action.user)
      return action.user
    case 'user-login':
      console.log("reducer register", action.user)

      return action.user
    case 'user-logout':
      console.log("reducer logout")
      return null
    default:
      return state
  }

};
export default user;