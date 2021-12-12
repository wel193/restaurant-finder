const RESTAURANT_API = "http://localhost:4000/api/restaurants";

export const findRestaurantsByName = (name) =>
    fetch(`${RESTAURANT_API}/${name}`)
        .then(response => response.json())

export const findRestaurantsByCity = (city) =>
    fetch(`${RESTAURANT_API}/${city}`)
        .then(response => response.json())

export const findRestaurantById = (id) =>
    fetch(`${RESTAURANT_API}/${id}`)
        .then(response => response.json())



