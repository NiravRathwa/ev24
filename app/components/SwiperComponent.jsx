"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 768) {
        setSlidesPerView(3);
      } else if (width >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Swiper
      slidesPerView={slidesPerView}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={30}
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="mySwiper !h-32 !px-4"
    >
      <SwiperSlide className="">
        <img
          src="https://framerusercontent.com/images/iwBWtilT2BTg5uzvc56rS4y7Ok.jpg?scale-down-to=1024"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="">
        <img
          src="https://framerusercontent.com/images/iwBWtilT2BTg5uzvc56rS4y7Ok.jpg?scale-down-to=1024"
          alt=""
        />
      </SwiperSlide>  
    </Swiper>
  );
};

export default SwiperComponent;
