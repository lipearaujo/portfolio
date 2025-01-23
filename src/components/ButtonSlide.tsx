import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useSwiper } from "swiper/react";

type Props = {};

const ButtonSlide = (props: Props) => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center items-center gap-6 mt-4">
      <button
        className="hover:text-[#42ffa0] transition-all duration-300"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowDropleft size={52} />
      </button>
      <button
        className="hover:text-[#42ffa0] transition-all duration-300"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowDropright size={52} />
      </button>
    </div>
  );
};

export default ButtonSlide;
