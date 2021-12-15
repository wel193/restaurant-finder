import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {updateCurrentProfile} from "../../Services/profileService"


const ProfileComponent = ({profile}) => {
    const dispatch = useDispatch();
    const [userProfile, setUserProfile] = useState(profile);
    // const [userID, setUserID] = useState("");
    // const [userName, setUserName] = useState("");
    // const [userEmail, setUserEmail] = useState("");
    // const [userAddress, setUserAddress] = useState("");

    const saveClickHandler = () => {
        const _profile = {...userProfile,
            id: userProfile.id,
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

