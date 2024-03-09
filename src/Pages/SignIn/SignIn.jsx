import React, { useEffect, useState } from 'react'
import './signin.css'
function SignIn() {
  const [user, setuser] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
   const {name,value} = e.target;
   setuser({...user, [name]:value}) 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData= new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
  }
  return (
    <form onChange={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" size={30} value={user.email}  onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" size={30} value={user.password} onChange={handleChange} />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Remember me Later</label>
      </div>
      <button type="submit" className="btn-primary">Submit</button>
    </form>


  )
}

export default SignIn