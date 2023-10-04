import React from "react";
import descriptionimg from "./descimg.png";

const Description = () => {
  return (
    <div className="w-full bg-gray-200 mb-10">
      <div className="grid  md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 content-center shadow-2xl rounded-3xl m-10  bg-gray-100">
        <div>
          <img src={descriptionimg} alt="descriptionimg" className="p-10" />
        </div>
        <div className="text-xl  grid content-center">
          <div className="font-extrabold text-4xl">
            Participate in India’s healthcare revolution
          </div>
          <hr className="border-2 rounded-xl w-20 border-black my-8" />
          <div className="font-sm md:leading-10   md:pr-52">
            <p>
              Create ABHA & store all your medical records with Meet Health (Govt
              of India ABDM approved PHR app)
            </p>
          </div>
        </div>
      </div></div>
  );
};

export default Description;
