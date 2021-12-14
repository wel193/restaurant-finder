import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {getCurrentProfile, updateCurrentProfile} from "../../Services/profileService"
import service from '../../Services/profileService';

const selectUser = (state) => state.user;
const selectProfile = (state) => state.profile.profile;

const ProfileComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile)
    const user = useSelector(selectUser)
    console.log("in profile component", user)
    const user_id = user.id;

    const [userProfile, setUserProfile] = useState([]);
    const [userName, setUserName] = useState("");
    const [userAddress, setUserAddress] = useState("");
    

    // const findProfileByEmail = (profile) =>
    //     service.findProfileByEmail(profile.email)
    //         .then(profile => setProfile(profile));

    // const updateProfile = (event) =>
    //     setProfile({...profile, email: event.target.value});
    //
    // const saveProfile = () =>
    //     service.updateProfile(profile)
    //         .then(() => setProfile(
    //             profiles.map(m => m._id === profile._id ? profile : m)
    //         ));

    useEffect(() =>
        service.getCurrentProfile()
            .then(profiles => setUserProfile(profiles)));



    const saveClickHandler = () => {
        const _profile = {...userProfile,
            name: userProfile.name,
            email: userProfile.email,
            address: userProfile.address,
            type: userProfile.type

        };

        updateCurrentProfile(dispatch, _profile);
    }
    const saveClickXHandler = () => {
        dispatch({
            type: 'discard-change'
        })
    }

    const handleChange = (newProfile) =>
        setUserProfile(newProfile);

    return (
        <>
            {/*todo UI of profile edit page*/}
            <ul className="list-group">
                {
                    profile.map(user =>
                        <li key={user.name}
                            className="list-group-item">
                            {user.email}
                        </li>
                    )
                }
            </ul>


            <div className="container">
                <p>this is from profile page</p>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={(event) =>
                        handleChange({...userProfile, id: event.target.value})}
                           type="text" className="form-control" id="username"
                           placeholder="Username"
                           value={userProfile.id}/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={(event) =>
                        handleChange({...userProfile, name: event.target.value})}
                           type="text" className="form-control" id="name"
                           placeholder="Name"
                           value={userProfile.name}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={(event) =>
                        handleChange({...userProfile, email: event.target.value})}
                           type="text" className="form-control" id="email"
                           placeholder="Email"
                           value = {userProfile.email}/>
                </div>

                <div className="form-group">
                    <label htmlFor="website">Phone</label>
                    <input onChange={(event) =>
                        handleChange({...userProfile, address: event.target.value})}
                           type="text" className="form-control" id="phone"
                           placeholder="Phone Number"
                           value = {userProfile.address}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Street">Location</label>
                    <input onChange={(event) =>
                        handleChange({...userProfile, type: event.target.value})}
                           type="text" className="form-control" id="location"
                           placeholder="Location"
                           value = {userProfile.type}/>
                </div>

                <br/>
                <Link to="/profile">
                    <button type="button" id="submit" name="submit"
                            className="btn btn-primary" onClick={saveClickHandler}>Update
                    </button>
                </Link>
                <Link to="/profile">
                    <button type="button" id="submit" name="submit"
                            className="btn btn-secondary" onClick={saveClickXHandler}>Cancel
                    </button>
                </Link>



            </div>
        </>
    );
}

export default ProfileComponent;

