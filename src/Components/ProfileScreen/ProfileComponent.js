import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser,updateUserProfile} from '../../Services/userService';


const selectUser = (state) => state.user;

const ProfileComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    useEffect(()=>getUser(dispatch), [dispatch])
    console.log("============in profile component, user: ", user)
    // if (user) {
    //     const user_id = user.id;
    //     console.log("=====userid:", user_id)
    // }
    // console.log("user id", user._id)
    // console.log("user name:", user.username)
    // console.log("user email:", user.email)

    const [avatarIcon, setAvatarIcon] = useState(user.avatarIcon);

    const avatarChangeHandler = (e) => {
        setAvatarIcon(e.target.value)
    }

    const updateClickHandler = () => {
        updateUserProfile(dispatch, {
            avatarIcon: avatarIcon
        }).then((res) => {console.log("Profile Saved!", res)})
            .catch(()=>console.log("update profile error"))
    }

    return(
        <>
            <div className="d-flex card input-group">
                <div className="card-body">
                <h5 className="card-title">
                    Profile
                </h5>
                        <div className="card-title">
                            Username: {user.username}
                        </div>
                        <div className="card-title">
                            Email: {user.email}
                        </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="avatarIconUrl">Avatar Icon Url:</label>
                    <input className="form-control" type="text" name='avatarIconUrl'
                              placeholder={avatarIcon} onChange={avatarChangeHandler}>
                            </input>
                </div>

                <div className="mb-3">
                        <button className="btn btn-success btn-block"
                                onClick={updateClickHandler}>
                                Update Avatar Icon
                        </button>
                </div>
                </div>
            </div>
        </>
    )
};



export default ProfileComponent;

