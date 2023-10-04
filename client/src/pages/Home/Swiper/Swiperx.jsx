import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

const Swiperx = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSwipe = () => {
      const totalSlides = swiperRef.current.swiper.slides.length;
      const nextSlide = (currentSlide + 1) % totalSlides;
      swiperRef.current.swiper.slideTo(nextSlide);
    };

    const intervalId = setInterval(autoSwipe, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        initialSlide={currentSlide}
      >
        <SwiperSlide>
          <div className="w-full -mt-6 flex flex-col-reverse md:flex-row z-0">
            <div className="w-full md:w-1/2 h-min">
              <div className="font-bold mt-5 md:mt-20 px-4 md:px-12 text-3xl text-center md:text-left">
                ABHA - Ayushman Bharat Health Account or Health ID Card Approved
                by NDHM.GOV.IN
              </div>
              <div className="mt-1 mx-10 md:mx-10  indent-14 text-justify h-min">
                Ayushman Bharat Health Account (ABHA) or Health ID is an
                initiative of the Indian government under the Ayushman Bharat
                Digital Mission (ABDM) for Indian citizens to establish a
                centralised database of all their health-related data.
                <p className="font-bold  ">It is crucial to remember that </p>
                <ul style={{ listStyleType: "disc" }} className=" indent-5">
                  <li>
                    The health records associated with Health IDs or ABHA
                    numbers can only be accessed with the informed consent of
                    the individual.
                  </li>
                  <li>
                    People have the option to create an alias, referred to as an
                    "ABHA address" (similar to the email ID xyz@ndhm with a
                    password). Highly secure & private, data sharing happens
                    only with the user’s consent
                  </li>
                </ul>
                <div className="flex  justify-center  h-min">
                  <button className=" flex  border-2 items-center bg-blue-600 text-white border-black px-3 py-2 rounded-3xl">
                    Create ABHA
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="ml-2"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 p-4 md:p-10 h-min">
              <img src={img1} alt="header" className="mx-auto md:right-0 " />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full -mt-6 flex flex-col-reverse md:flex-row  ">
            <div className="w-full md:w-1/2 ">
              <div className="font-bold mt-5 md:mt-20 px-4 md:px-12 text-3xl text-center md:text-left">
                Download the Cowin vaccine certificate by mobile number
              </div>
              <div className="mt-5 mx-10 md:mx-10  indent-14 text-justify ">
                Meet Health is the official partner of the government of India
                cowin.gov.in portal, to issue the Cowin vaccine certificate.
                Citizens who are partial (1st dose) or fully vaccinated (2nd
                dose) & booster dose can download a cowin vaccine certificate
                using their mobile number
                
                <ul style={{ listStyleType: "disc" }} className=" mt-4 indent-2">
                  <li>
                  Proof of COVID vaccination [1st dose, 2nd dose, and the booster dose].
                  </li>
                  <li>
                  Specific information about Covishield or Covaxin doses received.
                  </li>
                  <li>
                  May use the certificate as proof to enter public places, including shopping malls
                  </li>
                </ul>
                <div className="flex mt-10 justify-center  ">
                  <button className=" flex  border-2 items-center bg-blue-600 text-white border-black px-3 py-2 rounded-3xl">
                    Download Certificate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="ml-2"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 p-4 md:p-10 ">
              <img src={img2} alt="header" className="mx-auto md:right-0 " />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full -mt-6 flex flex-col-reverse md:flex-row ">
            <div className="w-full md:w-1/2 h-min">
              <div className="font-bold mt-5 md:mt-20 px-4 md:px-12 text-3xl text-center md:text-left">
                Download the Cowin vaccine certificate by mobile number
              </div>
              <div className="mt-5 mx-10 md:mx-10  indent-14 text-justify h-min">
                Meet Health is the official partner of the government of India
                cowin.gov.in portal, to issue the Cowin vaccine certificate.
                Citizens who are partial (1st dose) or fully vaccinated (2nd
                dose) & booster dose can download a cowin vaccine certificate
                using their mobile number
                <div className="flex mt-10 justify-center  h-min">
                  <button className=" flex  border-2 items-center bg-blue-600 text-white border-black px-3 py-2 rounded-3xl">
                    Download Certificate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="ml-2"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 p-4 md:p-10 h-min">
              <img src={img3} alt="header" className="mx-auto md:right-0 " />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Swiperx;
