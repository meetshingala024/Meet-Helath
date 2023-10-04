import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: "",
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

      if (loading) return;
      const { firstname, lastname, email, password, confpassword } =
        formDetails;
      if (!firstname || !lastname || !email || !password || !confpassword) {
        return toast.error("Input field should not be empty");
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
        axios.post("http://localhost:8000/user/register", {
          firstname,
          lastname,
          email,
          password,
        }),
        {
          pending: "Registering user...",
          success: "User registered successfully",
          error: "Unable to register user",
          loading: "Registering user...",
        }
      );
      return navigate("/login");
    } catch (error) {}
  };

  return (
    <form onSubmit={formSubmit} className=" bg-gray-200 w-full my-3 flex justify-center">
      <div className="bg-white p-10 rounded-lg my-5">
        <h1 className="text-2xl font-bold text-center mb-10">Sign Up</h1>
        {/* Name */}
        <div className="mb-2">
        <label className="font-bold">FirstName</label>
        <input
          type="text"
          name="firstname"
          className="w-full border border-gray-400 p-2 rounded-lg"
          placeholder="Enter your first name"
          value={formDetails.firstname}
          onChange={inputChange}
        />
      </div>

      {/* Email */}
      <div className="mb-2">
        <label className="font-bold">LastName</label>
        <input
          type="text"
          name="lastname"
          className="w-full border border-gray-400 p-2 rounded-lg"
          placeholder="Enter your last name"
          value={formDetails.lastname}
          onChange={inputChange}
        />
      </div>

      {/* Email */}
      <div className="mb-2">
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

      <div className="mb-2">
        <label className="font-bold">PassWord</label>
        <input
          type="password"
          name="password"
          className="w-full border border-gray-400 p-2 rounded-lg"
          placeholder="Enter your password"
          value={formDetails.password}
          onChange={inputChange}
        />
      </div>

      <div className="mb-5">
        <label className="font-bold">ConFirm Password</label>
        <input
          type="password"
          name="confpassword"
          className="w-full border border-gray-400 p-2 rounded-lg"
          placeholder="Confirm your password"
          value={formDetails.confpassword}
          onChange={inputChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 w-full text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        disabled={loading ? true : false}
      >
        sign up
      </button>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <NavLink to="/login" className="text-blue-500">
          Login
        </NavLink>
        </p>
        </div>
    </form>
  );
}

export default Register;
