import React from "react";
import { FiArrowRight } from "react-icons/fi";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";

const HeroSection = () => {
  return (
    <div className="py-8 px-4 flex justify-center items-center bg-[#fff]  gap-6">
      <div className="w-[546px] flex flex-col justify-center">
        <p className="text-[#141414] font-bold text-[60px] leading-[64px]">
          Show Them Don’t Just Tell
        </p>
        <p className="text-[15px] font-normal text-[#000000BF] w-[546px]">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>

        <button className="flex justify-center items-center mt-3 text-white text-[12px] w-1/4 rounded-md gap-1 px-1 py-2 bg-[#120B48]">
          Install HelpMeOut <FiArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col gap-6">
          <img src={pic1} alt="photo" />
          <img src={pic2} alt="photo" />
        </div>

        <div className="col-span-1">
          <img src={pic3} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
