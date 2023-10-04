import React from "react";
import Swiperx from "./Swiper/Swiperx";
import Stat from "./Stat/Stat";
import Faqs from "./Faqs";
import Detail from "./Detail";
import Description from "./Description/Description";
import Review from "./Review/Review";

const Home = () => {
  return (
    <>
      <Swiperx />
      <Stat />
      <Detail />
      <Description />
      <Review/>
      <Faqs />
    </>
  );
};

export default Home;
