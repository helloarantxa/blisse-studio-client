import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authServices";

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

    const requestBody = { email, password, username: name };

    post("/auth/signup", requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Sign Up</h1>

      <form onSubmit={handleSignupSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-600">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleName}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-600">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
        >
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <p className="mt-4">
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
}

export default SignupPage;