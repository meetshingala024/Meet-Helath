import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import jwt_decode from "jwt-decode";
import fetchData from "../helper/apiCall";


function Login() {
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = formDetails;
      if (!email || !password) {
        return toast.error("Input field should not be empty");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      }

      const { data } = await toast.promise(
        axios.post("http://localhost:8000/user/login", {
          email,
          password,
        }),
        {
          pending: "Logging in...",
          success: "Login successfully",
          error: "Unable to login user",
          loading: "Logging user...",
        }
      );
      localStorage.setItem("token", data.token);
      dispatch(setUserInfo(jwt_decode(data.token).userId));
      getUser(jwt_decode(data.token).userId);
    } catch (error) {
      return error;
    }
  };

  const getUser = async (id) => {
    try {
      const temp = await fetchData(`http://localhost:8000/user/getuser/${id}`);
      dispatch(setUserInfo(temp));
      navigate("/");
      window.location.reload();
    } catch (error) {
      return error;
    }
  };

  return (
        <form
          onSubmit={formSubmit}
          className="bg-gray-200 p-10 rounded-lg flex justify-center"
    >
            <div className="bg-white p-10 rounded-lg shadow-md">

<h1 className="text-2xl font-bold text-center mb-5">Login</h1>

{/* Email */}
<div className="mb-5">
  <label className="font-bold">Email</label>
  
          <input
            type="email"
            name="email"
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
                  </div>

{/* Password */}
<div className="mb-5">
  <label className="font-bold">Password</label>  
          <input
            type="password"
            name="password"
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            sign in
          </button>
          <p className="mt-4 text-center">
          Don&apos;t have an account? 
          <NavLink to="/register" className="text-blue-500">
            Register
          </NavLink>  
        </p>
        </div>
    </form>
  );
}

export default Login;
