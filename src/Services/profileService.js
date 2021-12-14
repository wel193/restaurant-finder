// todo update external port url
// let PROFILE_API = process.env.PORT ? 'https://node-on-heroku-ingrid.herokuapp.com/api/profile': 'http://localhost:4000/api/profile'
const PROFILE_API = 'http://localhost:4000/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type:'get-current-profile',
                profile
            })
        );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(`${PROFILE_API}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'edit-profile',
                profile
            }));

    // .then(response => response.json());


export default {
    updateCurrentProfile, getCurrentProfile
};


