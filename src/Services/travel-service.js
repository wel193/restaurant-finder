const axios = require("axios").default;

let options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/get-details',
    params: {location_id: '293919', currency: 'USD', lang: 'en_US'},
    headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'deee31c169msh4751c1110662115p1ab8b8jsnec8483191d17'
    }
};

export const fetchDetails = (id) => {
    async function axiosTest() {
        options.params.location_id = id;
        const response = await axios.request(options);
        return response.data;
    }
    return axiosTest();
};


// axios.request(options).then(function (response) {
//     console.log(response.data);
//     return response.data;
// }).catch(function (error) {
//     console.error(error);
// });



