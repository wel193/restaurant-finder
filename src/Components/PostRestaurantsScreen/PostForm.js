import React, {useState} from 'react';
import {userRegister} from '../../Services/userService';
import {useNavigate} from 'react-router-dom';
import {postRestaurant} from '../../Services/restaurant-service';
import RegisterComponent from '../RegisterScreen/RegisterComponent';

const PostForm = ({host}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const postHandler = () => {
    console.log("post restaurant")
    postRestaurant({
      name: name,
      description: description,
      address: address,
      phone: phone,
      website: website,
      photo:{images:{large:{url:image}}}
    }).then(res => {console.log("success post"); navigate('/find')})
        .catch(e => console.error(e))
  }

  return(
      <>
        <div className="d-flex card input-group">
          <div className="card-body">
            <h5 className="card-title">
              Register
            </h5>
            <div className="mb-3">
              <label className="form-label"
                     htmlFor="name">Restaurant name</label>
              <input className="form-control" type="text" id="username"
                     name="name" onChange={e => setName(e.target.value)} autoFocus required/>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input className="form-control" type="text" id="phone"
                     name="phone" onChange={e => setPhone(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label className="form-label"
                     htmlFor="address">Address</label>
              <input className="form-control" type="text" id="address"
                     name="address" onChange={e => setAddress(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label className="form-label"
                     htmlFor="website">Website</label>
              <input className="form-control" type="text" id="website"
                     name="website" onChange={e => setWebsite(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label className="form-label"
                     htmlFor="image">Image url</label>
              <input className="form-control" type="text" id="image"
                     name="image" onChange={e => setImage(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="description" className="text-muted">description</label>
              <textarea className="form-control"
                        id="description"
                        onChange={(event) => setDescription(event.target.value)}/>
            </div>
            <button className="btn btn-success btn-block" onClick={postHandler}>Post</button>
          </div>
        </div>
      </>
  )

}
export default PostForm;