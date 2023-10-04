import React from "react";

const Detail = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 ml-4">
      <div>
        <div className="font-extrabold text-3xl ">
          How to create ABHA/Health Id?
        </div>
        <div className="font-medium md:leading-10  mt-4">
          Create a new ABHA account using the steps below-
          <ol style={{ listStyleType: "A" }} className="ml-6 mt-2">
            <li>Enter your Aadhar card number for registration.</li>
            <li>
              Provide the OTP sent on registered mobile number for verification.
            </li>
            <li>
              A 14 digit Digital Health Card or ABHA will be generated
              immediately.
            </li>
            <li>The ABHA account is successfully created and ready for use.</li>
          </ol>
        </div>
      </div>
      <div className="lg:1/2 md:w-5/6 flex lg:w-2/3 justify-center mx-5">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/hN_InEusu9k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Detail;
