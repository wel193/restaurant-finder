import React, {useEffect} from 'react';
import PostFrom from "./PostForm"
import Navigation from '../Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../Services/userService';
const selectUser = (state) => state.user;

const PostRestaurantScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  useEffect(()=>getUser(dispatch), [dispatch])
  return(
      <div className="container mt-2">
        <Navigation active="login"/>
        {user && user.role ==='HOST' &&
        <PostFrom host={user.username}/>
        }
        {!user &&
        <h5>Please log in before checking your this page!</h5>
        }
      </div>

  )
};

export default PostRestaurantScreen;
