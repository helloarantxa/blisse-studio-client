import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.Context";
import { post } from "../services/authServices";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    post("/auth/login", requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);

        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Login</h1>

      <form onSubmit={handleLoginSubmit} className="space-y-4">
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
          Login
        </button>
      </form>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <p className="mt-4">
        Don't have an account yet? <Link to={"/signup"}>Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
