import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authServices";

// const API_URL = "http://localhost:4000";
 
 
function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
 
  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
 
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, username: name 
    };
 
  
    post('/auth/signup', requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
       
        console.log(error)
      })
  };
 
  
  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>
 
      <form onSubmit={handleSignupSubmit}>

        <label>Name:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
 
       
 
        <button type="submit">Sign Up</button>
      </form>
 
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  )
}
 
export default SignupPage;
