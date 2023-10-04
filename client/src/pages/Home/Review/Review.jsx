import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviewData = [
  {
    id: 1,
    title: "Convenient and Secure",
    content:
      "Health ID has made managing my health records a breeze. I love having everything I need in one place, and the security measures give me peace of mind.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
    name: "Bonnie Green",
    designation: "Developer at Open AI",
  },
  {
    id: 2,
    title: "User-Friendly Interface",
    content:
      "The website is incredibly easy to use, even for someone not tech-savvy like me. I can access my medical history and appointments with just a few clicks.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Roberta Casas",
    designation: "Lead designer at Dropbox",
  },
  {
    id: 3,
    title: "Life-Saver for Medication Management",
    content:
      "Health ID's medication tracking feature has helped me stay on track with my prescriptions. No more missed doses or confusion about dosages! The website was easy to use, and very helpful.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    name: "Jese Leos",
    designation: "Software Engineer at Facebook",
  },
  {
    id: 4,
    title: "Trusted and Reliable",
    content:
      "I trust Health ID with my sensitive health data. The platform's security and privacy measures are commendable, and I feel safe using it for my medical records.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    name: "Joseph McFall",
    designation: "CTO at Google",
  },
];

const Review = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Swiper
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
        }}
        ref={swiperRef}
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
        {reviewData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <figure className=" grid mb-8 h-72 border rounded-2xl shadow-sm  md:mb-12 md:grid-cols-1 p-8 text-center bg-white border-b border-gray-200  md:border-r dark:bg-slate-100 dark:border-gray-400">
              <blockquote className=" mx-auto mb-4 text-gray-500 lg:mb-8  dark:text-gray-600">
                <h3 className="sm:text-lg font-semibold text-gray-900 dark:text-black text-sm">
                  {slide.title}
                </h3>
                <p className="my-4 lg:text-medium  sm:overflow-hidden overflow-scroll h-16 sm:h-20 ">{slide.content}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center  space-x-3">
                <img
                  className="rounded-full w-9 h-9"
                  src={slide.image}
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-black text-left ">
                  <div>{slide.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {slide.designation}
                  </div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;
