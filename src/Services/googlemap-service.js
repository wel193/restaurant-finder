let latitude = "37.3361905"
let longitude = "-121.890583"
// export const fetchGoogleMapRestaurant = () =>
//     fetch(API,{mode: 'no-cors', method: "GET", headers: {'Content-Type': 'application/json'}})
//         .then(response => response.json())
//         .then(res => console.log(res))
//         .catch(e => console.log("request failed", e));
export const fetchRestaurants = (location) =>
    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${latitude}&longitude=${longitude}&limit=30&currency=USD&distance=2&lunit=km&lang=en_US`,
        {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": "deee31c169msh4751c1110662115p1ab8b8jsnec8483191d17"
          }
        })
        .then(response => response.json())
        .then(data => data.data)
        .catch(e=>console.log(e))
