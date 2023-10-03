import React from "react";
import { CgRecord } from "react-icons/cg";
import { FaPaperPlane } from "react-icons/fa";
import { PiVinylRecord } from "react-icons/pi";
import videoRepo from "../assets/videoRepo.png";

const Features = () => {
  return (
    <div className="mt-8 bg-[#fff]">
      <div className="flex flex-col items-center">
        <h1 className="mt-6 text-center font-bold text-[#141414] text-[38px]">Features</h1>
        <p className="text-[#616163] text-[14px] ">
          Key Highlights of Our Extension
        </p>
      </div>
      <div className="flex mt-16 py-6 gap-4">
        <div className="items-center pt-6 px-6">
          <div className="flex gap-2">
            <CgRecord size={25} />
            <div className="mb-10">
              <h1 className="text-[#1B233D] text-[18px]">
                Simple Screen Recording
              </h1>
              <p className="text-[#616163] text-[15px]">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <FaPaperPlane size={18} className="" />
            <div className="mb-10">
              <h1 className="text-[#1B233D] text-[18px]">Easy-to-Share URL</h1>
              <p className="text-[#616163] text-[15px]">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <PiVinylRecord size={25} />
            <div className="mb-10">
              <h1 className="text-[#1B233D] text-[18px]">Revisit Recordings</h1>
              <p className="text-[#616163] text-[15px]">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>

        <img src={videoRepo} alt="photo"  />
      </div>
    </div>
  );
};

export default Features;
