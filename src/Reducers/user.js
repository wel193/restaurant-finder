const user = (state=null, action) =>{
  switch (action.type){
    case 'fetch-user':
      console.log("reducer fetch", action.user)
      return action.user
    case 'user-login':
      console.log("reducer login", action.user)

      return action.user
    case 'user-logout':
      console.log("reducer logout", action.user)
      return null
    default:
      return state
  }

};
export default user;