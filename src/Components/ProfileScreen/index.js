import React, {useEffect, useState} from 'react';
import ProfileComponent from './ProfileComponent';
import Navigation from '../Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../Services/userService';
import FindItem from '../FindScreen/FindItem';
import {findRestaurantsByAuthor} from '../../Services/restaurant-service';
const selectUser = (state) => state.user;
const selectRestaurants = (state) => state.restaurants;

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  const restaurants = useSelector(selectRestaurants)
  const author_id = user? user._id : null;
  useEffect(()=>getUser(dispatch), [dispatch])
  useEffect(()=>findRestaurantsByAuthor(dispatch, author_id), [dispatch])

  console.log(restaurants)
  return(
        <div className="container mt-2">
            <Navigation active="profile"/>
          {user &&
          <ProfileComponent/>
          }
          {!user&&
              <h5>Please log in before checking your profile!</h5>
          }
          {user && user.role === 'HOST' && restaurants &&
          <div>
            <h1 className="mt-4">Your restaurant post</h1>
            <ul className="list-group">
              {
                restaurants.map(restaurant => {
                  if (restaurant && restaurant.name)
                    return(
                        <FindItem restaurant={restaurant}/>
                    )
                })
              }
            </ul>
          </div>
          }
        </div>

    )
};

export default ProfileScreen;
