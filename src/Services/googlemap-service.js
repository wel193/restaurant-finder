require('dotenv').config()
// export const fetchGoogleMapRestaurant = () =>
//     fetch(API,{mode: 'no-cors', method: "GET", headers: {'Content-Type': 'application/json'}})
//         .then(response => response.json())
//         .then(res => console.log(res))
//         .catch(e => console.log("request failed", e));
export const fetchRestaurants = (lat, lng) =>
    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lng}&limit=30&currency=USD&distance=2&lunit=km&lang=en_US`,
        {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API}`
          }
        })
        .then(response => response.json())
        .then(data => data.data)
     
