import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../../Services/userService";
import {updateCurrentProfile} from "../../Services/profileService";


const selectUser = (state) => state.user;
const selectProfile = (state) => state.profile.profile;

const ProfileComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile)
    console.log("============in profile component, profile:", profile)
    const user = useSelector(selectUser)
    console.log("============in profile component, user: ", user)


    // if (user) {
    //     const user_id = user.id;
    //     console.log("=====userid:", user_id)
    // }
    // console.log("user id", user._id)
    // console.log("user name:", user.username)
    // console.log("user email:", user.email)

    let [username, setUsername] = useState({newUsername: user.username});
    let [address, setAddress] = useState({newAddress: user.address});

    const nameChangeHandler = (e) => {
        const username = e.target.value;
        const newUsername = {newUsername : username};
        setUsername(newUsername);
    }
    const addressChangeHandler = (e) => {
        const address = e.target.value;
        const newAddress = {newAddress : address};
        setAddress(newAddress);
    }

    const saveClickHandler = () => {
        updateCurrentProfile(dispatch, {
            username: username.newUsername,
            address: address.newAddress
        }).then((res) => {console.log("Profile Saved!", res)})
    }


    return(
        <>
            <br/>
            <div className="container">
                <div className="col-10">
                    <div style={{ fontSize: '20px' }}>
                        Edit Profile
                    </div>

                </div>

                <div className="mt-2">
                    <label htmlFor="name">Name</label>
                    <textarea id="name" style={{width: "100%"}}
                              value={username.newUsername} onChange={nameChangeHandler}>
                                {user.username}
                            </textarea>
                </div>
                <div className="mt-2 ">
                    <label htmlFor="bio">Address</label>
                    <textarea name='address' style={{width: "100%"}}
                              value={user.newAddress} onChange={addressChangeHandler}>
                                {user.address}
                            </textarea>
                </div>

                <div className="col-1">
                        <button className="btn btn-success btn-block"
                                onClick={saveClickHandler}>
                                Save
                        </button>
                </div>



            </div>




        </>
    )
};



export default ProfileComponent;

