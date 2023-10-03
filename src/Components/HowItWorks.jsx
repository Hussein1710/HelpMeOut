import React from "react";
import Num1 from "../assets/Num1.png";
import Num2 from "../assets/Num2.png";
import Num3 from "../assets/Num3.png";
import picFrame from "../assets/picFrame.png";

const HowItWorks = () => {
  return (
    <div className="mt-8 bg-[#fff]">
      <h1 className="mt-6 text-center font-bold text-[#141414] text-[38px]">
        How It Works
      </h1>

      <div className="flex gap-4 mt-6 px-4">
        <div className="flex flex-col items-center">
          <img src={Num1} alt="number" className="w-[40px]" />
          <h1 className="text-[#1B233D] font-semibold text-[22px] mt-2">Record Screen</h1>
          <p className="w-[358px] text-[#616163] text-[16px] text-center mb-4">
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <img src={picFrame} alt="frame" />
        </div>

        <div className="flex flex-col items-center">
          <img src={Num2} alt="number" className="w-[40px]" />
          <h1 className="text-[#1B233D] font-semibold text-[22px] mt-2">Share Your Recording</h1>
          <p className="w-[358px] text-[#616163] text-[16px] text-center mb-4">
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.{" "}
          </p>
          <img src={picFrame} alt="frame" />
        </div>

        <div className="flex flex-col items-center">
          <img src={Num3} alt="number" className="w-[40px]" />
          <h1 className="text-[#1B233D] font-semibold text-[22px] mt-2">Learn Effortlessly</h1>
          <p className="w-[358px] text-[#616163] text-[16px] text-center mb-4">
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
          <img src={picFrame} alt="frame" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
