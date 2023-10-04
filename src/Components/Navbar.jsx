import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import GetStartedPage from "../Pages/GetStartedPage";

const Navbar = () => {
  return (
    <div className="bg-[#fff] flex justify-between items-center border-b shadow sticky top-0 px-4">
      <img src={logo} alt="Logo" />
      <div className="flex gap-5 text-black font-semibold">
        <p>Features</p>
        <p>How it works</p>
      </div>
      <Link to="/get-started" className="text-[#120B48] font-bold hover:cursor-pointer">Get started</Link>
    </div>
  );
};

export default Navbar;
