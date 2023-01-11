import React, { useState , useRef } from "react";
import "../App.css";
import Frame from "../assets/Frame.png";
const Signup = () => {
const [formdata , setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    dob : "",
    postalcode: "",
    occupation : "",
    cnicNumer : "",
    password : "",
    confirmpass : ""

})
const [checked , setChecked] = useState(false)
const ref = useRef();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // Perform form validation
    if (formdata.firstName == "" || formdata.email == "" ||formdata.password == "") {
      setError("Firstname , Email and Password fields are required");
      return;
    }
    if (formdata.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if(!checked){
        setError("please Accept the policy")
        return
    }
    // Submit form data to server
    // ...
    // Clear form fields and display success message
    console.log(formdata)
    setFormData({
        firstName : "",
        lastName : "",
        email : "",
        phone : "",
        dob : "",
        postalcode: "",
        occupation : "",
        cnicNumer : "",
        password : "",
        confirmpass : ""
    })
    setError("Signup successful!");
  };
//  handle all input change
  const handleChange = (e) =>{
  
    const {name , value}  = e.target;
    setFormData({...formdata , [name] : value})
  }

  return (
    <div className="signup-container">
      <div className="form_header">
        <img src={Frame} className="logo"></img>
        <h2 className="signup">Sign up</h2>
        <p className="fill">Fill out the form</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formdata.firstName}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formdata.lastName}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={formdata.email}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              placeholder="Phone"
              type="text"
              name="phone"
              value={formdata.phone}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6 dob">
            <input
               ref={ref}
               className = "dob"
              placeholder="Date of Birth"
              type="text"
              name="dob"
              onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
              value={formdata.dob}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              placeholder="Postal Code"
              type="text"
              name="postalcode"
              value={formdata.postalcode}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6 dob">
            <input
              placeholder="Occupation"
              type="text"
              name="occupation"
              value={formdata.occupation}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              placeholder="CNIC"
              type="text"
              name="cnicNumer"
              value={formdata.cnicNumer}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={formdata.password}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirmpass"
              value={formdata.confirmpass}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <button className="submit" type="submit">Sign up</button>
        <div className="footer">
            <input type="checkbox" className="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)}></input>
            <p>I am agree with the <span  className="textdec"> Terms of Services </span> and the <span className="textdec">Privacy Policy </span>of Link Me Digital Health.</p>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Signup;
