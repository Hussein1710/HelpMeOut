import React from "react";
import Help from "../assets/Help.png";
const Footer = () => {
  return (
    <div className="bg-[#120B48]">
      <div className="flex  justify-around items-center pt-10">
        <img src={Help} alt="icon" className="items-start" />
        <div className="grid grid-cols-3 grid-rows-4 gap-6 pr-64">
          <p className="  text-white font-bold">Menu</p>
          <p className="  text-white font-bold">About Us</p>
          <p className="  text-white font-bold">Screen Record</p>
          <p className="  text-white text-[12px]">Home</p>
          <p className="  text-white text-[12px]">About</p>
          <p className="  text-white text-[12px]">Browser Window</p>
          <p className="  text-white text-[12px]">Conerter</p>
          <p className="  text-white text-[12px]">Contact Us</p>
          <p className="  text-white text-[12px]">Desktop</p>
          <p className="  text-white text-[12px]">How it Works</p>
          <p className="  text-white text-[12px]">Privacy Policy</p>
          <p className="  text-white text-[12px]">Applicatiom</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
