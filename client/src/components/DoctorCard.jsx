import "../styles/doctorcard.css";
import React, { useState } from "react";
import BookAppointment from "../components/BookAppointment";
import { toast } from "react-hot-toast";

const DoctorCard = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    if (token === "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };

  return (
    <div className="bg-white shadow-md border rounded-lg overflow-hidden w-96 justify-evenly mr-10 ">
    <div className="card-img flex justify-center items-center h-32 ">
      <img
        src={ele?.userId?.pic || "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
        alt="profile"
        className="w-20 h-20 rounded-full"
      />
      </div>
      <div className="flex justify-center mb-5">
    <div className="px-6 py-4 ">
      <h2 className="text-2xl font-semibold mb-2">
        Dr. {ele?.userId?.firstname + " " + ele?.userId?.lastname}
      </h2>
      <p className="text-gray-700 text-sm mb-2">
        <strong>Specialization: </strong>
        {ele?.specialization}
      </p>
      <p className="text-gray-700 text-sm mb-2">
        <strong>Email: </strong>
        {ele?.userId?.email}
      </p>
      <p className="text-gray-700 text-sm mb-2">
        <strong>Experience: </strong>
        {ele?.experience} yrs
      </p>
      <p className="text-gray-700 text-sm mb-4">
        <strong>Fees per consultation: </strong>$ {ele?.fees}
      </p>
      <button
        className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm focus:outline-none focus:ring focus:ring-blue-200"
        onClick={handleModal}
      >
        Book Appointment
      </button>
        </div>
        </div>
    {modalOpen && (
      <BookAppointment setModalOpen={setModalOpen} ele={ele} />
    )}
  </div>
  );
};

export default DoctorCard;
