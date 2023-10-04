import React from "react";
import backgroundImage from "./health-id-bg.webp";

const Newheader = () => {
  return (
    <div
      className="w-full bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="grid w-full  grid-cols-1 text-black ">
        <div className="flex justify-center flex-col  text-center">
          <div className="flex mt-10 sm:mx-40 font-bold justify-center text-3xl mx-20 ">
              PM-JAY Schemes: Ayushman Bharath Yojana, Eligibility &
              Registration Online
          </div>
          <div className="mx-20 text-left mb-20">
          <p className="my-4">
            The Ayushman Bharat Yojana is a healthcare initiative started by the
            Indian government to support the well-being of the underprivileged.
            On the Pradhan Mantri Jan Arogya Yojana (PM-JAY) website, you can
            sign up for the Ayushman Bharat Yojana. Before applying for the
            Ayushman Bharat Scheme, or PMJAY Card, be aware of the eligibility
            requirements and recognise whether you fall into the rural or urban
            category. Benefits of the Ayushman Bharat Yojana include up to 5
            Lakhs in annual health insurance coverage for each family.
          </p>
          <p>
            The PMJAY registration promises cashless care at accredited private
            and public hospitals. Additionally, expensive procedures like
            coronary bypass surgery and knee replacements are also covered. The
            PMJAY scheme's primary benefit is financial security in unforeseen
            circumstances.
            </p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Newheader;
