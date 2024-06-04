import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";

function MyForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateAccount = () => {
    console.log("Account created!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "first_name":firstName,
      "last_name":lastName,
      "email": email,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:3007/signup", requestOptions)
      .then(response => response.text())
      .then(result => {
        navigate("/login");
      })
      .catch(error => console.log('error', error));
  };
  return (
    <div className="main">
      <div className="form">
        <p><h1>Sign Up</h1></p>
        <div className="sighnup">
          <div>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label>Email Address</label>
            <input 
              className="emailinput" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              errorMessage="Enter a valid email address"
              clearButtonVisible
            />
          </div>
          <div>
            <label>Create password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label>Confirm password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </div>
        <button onClick={handleCreateAccount}>Create Account</button>
      </div>
    </div>
  );
}
export default MyForm;