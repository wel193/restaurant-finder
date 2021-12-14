const GOOGLEMAP_API_KEY = "AIzaSyD7SqwFF7t4MuxoQs3sk62qrrYJiHM9qyc";
let keyword = "chicken";
let location = "37.3361905,-121.890583";
const GOOGLEMAP_API =  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+location+"&radius=500&type=restaurant&keyword="+keyword+"&key="+GOOGLEMAP_API_KEY;
const API = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.3361905,-121.890583&radius=500&type=restaurant&keyword=chinese&key=AIzaSyD7SqwFF7t4MuxoQs3sk62qrrYJiHM9qyc";


// export const fetchGoogleMapRestaurant = () =>
//     fetch(API,{mode: 'no-cors', method: "GET", headers: {'Content-Type': 'application/json'}})
//         .then(response => response.json())
//         .then(res => console.log(res))
//         .catch(e => console.log("request failed", e));
export const fetchGoogleMapRestaurant = () => {
  fetch(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=12.91285&longitude=100.87808&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US",
      {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": "deee31c169msh4751c1110662115p1ab8b8jsnec8483191d17"
        }
      })
      .then(response => {console.log(response); return response.json()})
      // .then(data =>
      //   dispatch({
      //     type:'fetch-api-restaurants',
      //     restaurants: data.data
      //   }))


}