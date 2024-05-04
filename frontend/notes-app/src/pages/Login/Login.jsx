import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosinstval';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    setError("");

    //Login API Call
    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again later");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200">
      <div className = 'mt-28'></div>
      <h1 className="text-4xl mb-6 font-bold text-orange-600">📋 Notes 
      <span className='text-4xl mb-6 font-bold text-blue-700'>Nest 📋</span> </h1>
      <div className="w-96 border shadow-xl rounded-lg bg-white px-7 py-10">
        <form onSubmit={handleLogin}>
          <h2 className="text-2xl mb-7">Login</h2>

          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-xs pb-1 font-semibold">{error}</p>}

          <button type="submit" className="btn-primary">
            Login
          </button>

          <p className='text-sm text-center mt-4'>
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="text-primary font-semibold hover:text-blue-700 hover:underline"
            >
              Create an Account
            </Link>
          </p>
        </form>
      </div>
      <footer className="text-xs text-center mt-24">
        © NotesNest2k24 • All rights reserved
      </footer>
    </div>
  );
};

export default Login;
