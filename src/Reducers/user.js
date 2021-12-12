const user = (state=null, action) =>{
  switch (action.type){
    case 'fetch-user':
      console.log("reducer fetch", action.user)
      return action.user
    case 'register-user':
      console.log("reducer register", {
        ...action.user
      })
      return {...action.user}
    default:
      return state
  }

};
export default user;