import  { useState, useRef } from "react";
import "./AabhaCard.css";
import logo from "./nha-img.png";

const AabhaCard = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [checkbox2, setCheckbox2] = useState(false);
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "input1") {
      setInput1(value);
      if (value.length === 4 && input2Ref.current) {
        input2Ref.current.focus();
      }
    } else if (name === "input2") {
      setInput2(value);
      if (value.length === 4 && input3Ref.current) {
        input3Ref.current.focus();
      }
      if (value.length === 0 && input1Ref.current) {
        input1Ref.current.focus();
      }
    } else if (name === "input3") {
      setInput3(value);
      if (value.length === 0 && input2Ref.current) {
        input2Ref.current.focus();
      }
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "checkbox2") {
      setCheckbox2(checked);
    }
  };

  const handleCreateABHA = () => {
    if (checkbox2) {
      console.log("ABHA created!");
    }
  };

  const isButtonDisabled = input1 === "" || input2 === "" || input3 === "" || !checkbox2;

  return (
    <div className="grid  md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 content-center mt-4 bg-gray-300 items-center">
      <div className=" h-96 sm:h-fit overflow-scroll sm:overflow-hidden">
        <div className="font-extrabold text-4xl">
          ABHA - Ayushman Bharat Health Account or Health ID Card Approved by
          NDHM.GOV.IN
        </div>
        <hr className="border-2 rounded-xl w-20 border-black my-8" />
        <div className="font-sm md:leading-10   md:pr-26">
          <p>
            Ayushman Bharat Health Account (ABHA) or Health ID is an initiative
            of the Indian government under the Ayushman Bharat Digital Mission
            (ABDM) for Indian citizens to establish a centralised database of
            all their health-related data.
          </p>
          <p>
            It is crucial to remember that The health records associated with
            Health IDs or ABHA numbers can only be accessed with the informed
            consent of the individual. People have the option to create an
            alias, referred to as an "ABHA address" (similar to the email ID
            xyz@ndhm with a password). Highly secure & private, data sharing
            happens only with the user’s consent
          </p>
        </div>
      </div>
      <div>
        <div className="card sm:w-fit xl:w-fit bg-slate-100 ">
          <div className="card-info">
            <h2>
              Create Ayushman Bharat Health Account
              <br />
              <p style={{ textAlign: "center", color: "#E58075" }}>
                ABHA (Health ID) Card
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                USING
              </p>
              <label className="flex justify-center font-bold text-lg ">Adhaar Card</label>
            </h2>
            <div className="input-group">
              <input
                type="text"
                name="input1"
                value={input1}
                onChange={handleInputChange}
                maxLength={4}
                placeholder="xxxx"
                className="form-control"
                ref={input1Ref}
              />
              <input
                type="text"
                name="input2"
                value={input2}
                onChange={handleInputChange}
                maxLength={4}
                placeholder="xxxx"
                className="form-control"
                ref={input2Ref}
              />
              <input
                type="text"
                name="input3"
                value={input3}
                onChange={handleInputChange}
                maxLength={4}
                placeholder="xxxx"
                className="form-control"
                ref={input3Ref}
              />
            </div>
            <div className="checkbox-group">
              <br />
              <label>
                <input
                  type="checkbox"
                  className="mr-1"
                  name="checkbox2"
                  checked={checkbox2}
                  onChange={handleCheckboxChange}
                />
                I agree to give the necessary permission to Meet Health to set
                up my ABHA Health Locker.
              </label>
            </div>
            <button
              className="create-abha-button btn btn-primary  sm:w-fit xl:w-60"
              disabled={isButtonDisabled}
              onClick={handleCreateABHA}
            >
              Create ABHA
            </button>
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="flex justify-center w-fit items-center">
              APPROVED BY NHA
            <img
              src={logo}
              alt="NHA Logo"
              className="w-20"
              />
              </p>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              By continuing, you agree to meet health{" "}
              <a href="/">Terms of Service</a> &<a href="/">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AabhaCard;
