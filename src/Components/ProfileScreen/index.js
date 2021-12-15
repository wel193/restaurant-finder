import React, {useEffect} from 'react';
import ProfileComponent from './ProfileComponent';
import Navigation from '../Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../Services/userService';
const selectUser = (state) => state.user;

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  useEffect(()=>getUser(dispatch), [dispatch])
  return(
        <div className="container mt-2">
            <Navigation active="profile"/>
          {user &&
          <ProfileComponent/>
          }
          {!user&&
              <h5>Please log in before checking your profile!</h5>
          }
        </div>

    )
};

export default ProfileScreen;
