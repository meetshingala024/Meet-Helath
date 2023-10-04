import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const ApplyDoctor = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    name:"",
    specialization: "",
    experience: "",
    mobileno:"",
    fees: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const btnClick = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        axios.post(
          "http://localhost:8000/doctor/applyfordoctor",
          {
            formDetails,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Doctor application sent successfully",
          error: "Unable to send Doctor application",
          loading: "Sending doctor application...",
        }
      );

      navigate("/");
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <section className="register-section flex items-center justify-center min-h-screen bg-gray-100" id="contact">
      <div className="register-container bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Apply for Doctor</h2>
        <form className="register-form">
          <input
            type="text"
            name="name"
            className="form-input mb-4"
            placeholder="Your Name"
            value={formDetails.name}
            onChange={inputChange}
          />
          <input
            type="text"
            name="specialization"
            className="form-input mb-4"
            placeholder="Your Specialization"
            value={formDetails.specialization}
            onChange={inputChange}
          />
          <input
            type="number"
            name="experience"
            className="form-input mb-4"
            placeholder="Your Experience (in years)"
            value={formDetails.experience}
            onChange={inputChange}
          />
          <input
            type="number"
            name="mobileno"
            className="form-input mb-4"
            placeholder="Your Mobile No"
            value={formDetails.mobileno}
            onChange={inputChange}
          />
          <input
            type="number"
            name="fees"
            className="form-input mb-4"
            placeholder="Your Fees (in dollars)"
            value={formDetails.fees}
            onChange={inputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            onClick={btnClick}
          >
            Apply
          </button>
        </form>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default ApplyDoctor;
