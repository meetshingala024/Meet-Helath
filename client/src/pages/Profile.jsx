import React, { useEffect, useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { setLoading } from "../redux/reducers/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import fetchData from "../helper/apiCall";
import jwt_decode from "jwt-decode";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Profile() {
  const { userId } = jwt_decode(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const [file, setFile] = useState("");
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    mobile: "",
    gender: "neither",
    address: "",
    password: "",
    confpassword: "",
  });

  const getUser = async () => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData(`http://localhost:8000/user/getuser/${userId}`);
      setFormDetails({
        ...temp,
        password: "",
        confpassword: "",
        mobile: temp.mobile === null ? "" : temp.mobile,
        age: temp.age === null ? "" : temp.age,
      });
      setFile(temp.pic);
      dispatch(setLoading(false));
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [dispatch]);

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
      const {
        firstname,
        lastname,
        email,
        age,
        mobile,
        address,
        gender,
        password,
        confpassword,
      } = formDetails;

      if (!email) {
        return toast.error("Email should not be empty");
      } else if (firstname.length < 3) {
        return toast.error("First name must be at least 3 characters long");
      } else if (lastname.length < 3) {
        return toast.error("Last name must be at least 3 characters long");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      } else if (password !== confpassword) {
        return toast.error("Passwords do not match");
      }
      await toast.promise(
        axios.put(
          "http://localhost:8000/user/updateprofile",
          {
            firstname,
            lastname,
            age,
            mobile,
            address,
            gender,
            email,
            password,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          pending: "Updating profile...",
          success: "Profile updated successfully",
          error: "Unable to update profile",
          loading: "Updating profile...",
        }
      );

      setFormDetails({ ...formDetails, password: "", confpassword: "" });
    } catch (error) {
      return toast.error("Unable to update profile");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="register-section flex items-center justify-center min-h-screen bg-gray-100">
      <div className="profile-container bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <img
          src={file}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <form onSubmit={formSubmit} className="register-form">
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              name="firstname"
              className="form-input flex-1"
              placeholder="First Name"
              value={formDetails.firstname}
              onChange={inputChange}
            />
            <input
              type="text"
              name="lastname"
              className="form-input flex-1"
              placeholder="Last Name"
              value={formDetails.lastname}
              onChange={inputChange}
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <input
              type="email"
              name="email"
              className="form-input flex-1"
              placeholder="Email"
              value={formDetails.email}
              onChange={inputChange}
            />
            <select
              name="gender"
              value={formDetails.gender}
              className="form-input flex-1"
              id="gender"
              onChange={inputChange}
            >
              <option value="neither">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              name="age"
              className="form-input flex-1"
              placeholder="Age"
              value={formDetails.age}
              onChange={inputChange}
            />
            <input
              type="text"
              name="mobile"
              className="form-input flex-1"
              placeholder="Mobile Number"
              value={formDetails.mobile}
              onChange={inputChange}
            />
          </div>
          <textarea
            type="text"
            name="address"
            className="form-input mb-4"
            placeholder="Address"
            value={formDetails.address}
            onChange={inputChange}
            rows="2"
          ></textarea>
          <div className="flex space-x-4 mb-4">
            <input
              type="password"
              name="password"
              className="form-input flex-1"
              placeholder="Password"
              value={formDetails.password}
              onChange={inputChange}
            />
            <input
              type="password"
              name="confpassword"
              className="form-input flex-1"
              placeholder="Confirm Password"
              value={formDetails.confpassword}
              onChange={inputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            Update
          </button>
        </form>
      </div>
    </section>
      )}
    </>
  );
}

export default Profile;
