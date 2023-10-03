import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#fff] flex justify-between items-center border-b shadow sticky top-0 px-4">
      <img src={logo} alt="Logo" />
      <div className="flex gap-5 text-black font-semibold">
        <p>Features</p>
        <p>How it works</p>
      </div>
      <p className="text-[#120B48] font-bold">Get started</p>
    </div>
  );
};

export default Navbar;
