import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios';

function SignUp() {
  const [user, SetUser] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    address: '',
    gender: '',
    city: '',
    image: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetUser({
      ...user,
      [name]: value
    })
  }
  const handleImageChange = (e) => {
    const { name, files } = e.target;
    SetUser({
      ...user,
      [name]: files[0]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('FirstName', user.FirstName);
    formData.append('LastName', user.LastName);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('address', user.address);
    formData.append('gender', user.gender);
    formData.append('city', user.city);
    const { data } = await axios.post(`${import.meta.env.VITE_LINK}/auth/signup`, formData)
    console.log(user)
  }
  return (
    <form>
      <div className="form-row" onChange={handleSubmit}>
        <div className="col col-md-9">
          <label htmlFor="inputEmail4">First Name</label>
          <input type="text" className="form-control" placeholder="First name" onChange={handleChange} value={user.FirstName} name="FirstName" />
        </div>
        <div className="col col-md-9">
          <label htmlFor="inputEmail4">Last Name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={handleChange} value={user.LastName} name="LastName" />
        </div>
      </div>
      <div>
        <div className="form-row">
          <div className="form-group col-md-9">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control email" id="inputEmail4" placeholder="Email" onChange={handleChange} value={user.email} name="email" />
          </div>
          <div className="form-group col-md-9">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control email" id="inputPassword4" placeholder="Password" onChange={handleChange} value={user.password} name="password" />
          </div>
        </div>
        <div className="form-group col-md-9">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleChange} value={user.address} name="address" />
        </div>

      </div>
      <fieldset className="form-group">
        <label className="col-form-label col-sm-1 pt-0">Gender</label>
        <div className="form-check form-check-inline gender">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" onChange={handleChange} value="Male" />
          <label className="form-check-label" htmlFor="gridRadios1">Male</label>
        </div>
        <div className="form-check form-check-inline gender">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" onChange={handleChange} value="Female" />
          <label className="form-check-label" htmlFor="gridRadios2">Female</label>
        </div>
      </fieldset>
      <div className="form-row align-items-center">
        <div className="col-auto my-2">
          <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">City </label>
          <select className="custom-select mx-3" id="inlineFormCustomSelect" defaultValue="Choose" onChange={handleChange} value={user.city} name="city" >
            <option>Choose...</option>
            <option>Ramallah</option>
            <option>Jerusalem</option>
            <option>Gaza</option>
            <option>Bethlehem</option>
            <option>Nablus</option>
            <option>Hebron</option>
            <option>Jenin</option>
            <option>Tulkarm</option>
            <option>Qalqilya</option>
            <option>Jericho</option>
            <option>48-Arabs</option>
          </select>
        </div>

        <div className="form-group ">
          <label htmlFor="exampleFormControlFile1">Picture OF ID</label>
          <input type="file" className="form-control-file mx-3 " id="exampleFormControlFile1" onChange={handleImageChange} name="image" />
        </div>
        <div className="col-auto my-1">
          <button type="submit" className="btn-primary">Submit</button>
        </div>
      </div>
    </form>
  )
}
export default SignUp