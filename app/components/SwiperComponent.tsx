"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Autoplay} from "swiper/modules";
import "swiper/css";
import FeedBack from "./FeedBack";

type Props = {
  type: "feedback" | "logo";
  content?: any;
};
const SwiperComponent = ({ content, type }: Props) => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (type == "feedback") {
        setSlidesPerView(1);
      } else if (width >= 768) {
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
      spaceBetween={30}
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: type == "feedback" ? 6000 : 3000,
        disableOnInteraction: false,
      }}
      className={`mySwiper ${
        type == "feedback" ? "min-h-[50vh]" : "h-40"
      } !p-4  `}
    >
      {content.map((c: any) => (
        <SwiperSlide className={` ${type == "feedback" ? "bg-white shadow-lg p-8 rounded-lg border border-gray-200" : ""}`}>
          {type == "logo" ? (
            <img src={c.img} alt="" className="" />
          ) : (
            <FeedBack data={c} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
