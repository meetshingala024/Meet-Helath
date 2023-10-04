import React from "react";
import CreateImage from "./create-id.png";
import Healthidcreate from "./creation.png";
import Third from "./third.png";
import Fourth from "./fourth.png";
import Fifth from "./fifth.png";
import "./AboutABHA.css";
const Creation = () => {
  return (
    <>
      <div className="firstdiv ">
        <img className="bgimage " src={CreateImage} alt="backgroundimg"></img>
        <div className="seconddiv grid grid-cols-1  lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-10 ml-4 ">
          <div className="  flex  justify-center mx-5 font-extrabold text-4xl ">
            About Ayushman Bharat Digital Mission
          </div>

          <div className="font-sm text-slate-800 ">
            With the objective of strengthening the accessibility and equity of
            health services, the Ayushman Bharat Digital Mission was launched
            through video conferencing on 27th September 2021. The mission will
            leverage IT & it’s associated technologies to support existing
            health systems with a ‘citizen-centric’ approach. The vision of ABDM
            is to create a digital health ecosystem for the nation which can
            support universal health coverage in an efficient, accessible,
            inclusive, affordable, timely and safe manner. The mission is
            expected to improve the efficiency, effectiveness and transparency
            of Health service. It will provide a choice to individuals to access
            both public and private health services, whereas the healthcare
            professionals will have better access to patients medical history to
            provide a better healthcare.
          </div>
        </div>
      </div>
      <div className="seconddiv grid grid-cols-1  lg:grid-cols-2  md:gap-4 lg:gap-6  ml-4 ">
        <div className="  font-sm  p-10">
          <div className="flex text-4xl font-bold mb-4">Health ID</div>
          Under the mission, individuals are suggested to Create health ID to
          standardize the process of identification across healthcare providers.
          To issue UHID (Universal Health ID), the system collects certain basic
          details of the individual, including demographic, location,
          family/relationship, and contact details. The Health ID will uniquely
          identify individuals, authenticating them, and sharing their health
          records (only with the informed consent) with multiple healthcare
          systems and various stakeholders.
          <div className="flex my-5 items-center justify-center text-white">
            <button
              aria-label="Create ABHA"
              className=" flex w-40  justify-center border-2 items-center rounded-lg p-3 opacity-100"
              href=""
              style={{ backgroundColor: "  #7165E3" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="id-card"
                className="w-5 h-5 mr-2 "
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"
                ></path>
              </svg>
              Create ABHA
            </button>
          </div>
        </div>
        <div className=" px-5 -mt-10 s:w-80 w-full ">
          <img src={Healthidcreate} alt="" />
        </div>
      </div>
      <div className="seconddiv grid grid-cols-1  lg:grid-cols-2  md:gap-4 lg:gap-6  bg-slate-100 ">
        <div className="flex justify-end items-center">
          <img src={Third} alt="" />
        </div>
        <div className="  font-sm  p-10">
          <div className="flex text-4xl font-bold mb-4">
            Healthcare Professionals Registry (HPR)
          </div>
          Under the mission, individuals ar e suggested to Create health ID to
          standardize the process of identification across healthcare providers.
          To issue UHID (Universal Health ID), the system collects certain basic
          details of the individual, including demographic, location,
          family/relationship, and contact details. The Health ID will uniquely
          identify individuals, authenticating them, and sharing their health
          records (only with the informed consent) with multiple healthcare
          systems and various stakeholders.
        </div>
      </div>
      <div className="seconddiv grid grid-cols-1  lg:grid-cols-2  md:gap-4 lg:gap-6  ">
        <div className="  font-sm  p-10">
          <div className="flex text-4xl font-bold mb-4">
            Health Facility Registry (HFR)
          </div>
          Similar to HPR, Health Facility Registry is a comprehensive repository
          of health facilities. The HFR would include both private and public
          health facilities which includes clinics, hospitals, diagnostic
          laboratories and imaging centres, pharmacies, etc. The registry will
          empower health facilities to India’s Digital Health Ecosystem.
        </div>
        <div className="flex justify-center items-center">
          <img src={Fourth} alt="" className="w-80" />
        </div>
      </div>
      <div className="seconddiv grid grid-cols-1  lg:grid-cols-2  md:gap-4 lg:gap-6  bg-slate-100">
        <div className="flex justify-center items-center">
          <img src={Fifth} alt="" className="w-80" />
        </div>
        <div className="  font-sm  p-10">
          <div className="flex text-4xl font-bold mb-4">
            Health Records (PHR)
          </div>
          PHR is an electronic form of medical record(s) of an individual which
          conforms to nationally recognized interoperability standards. It is
          managed, shared and controlled by the individual, and can be drawn
          from multiple sources. The most notable feature of the PHR: The
          information is under the control of the individual. The Personal
          Health Record-System (PHR) will enable individuals to manage complete
          information about his/her healthcare. The information would include
          the longitudinal record, comprising of his/her health data, lab
          reports, discharge summaries, treatment details, across one or
          multiple health facilities.
        </div>
      </div>
    </>
  );
};

export default Creation;
