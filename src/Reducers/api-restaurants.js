const api_restaurants = (state=[], action) =>{
  switch (action.type) {
  case 'fetch-api-restaurants':
    return action.restaurants;
  default:
    return state;
  };

};
export default api_restaurants();