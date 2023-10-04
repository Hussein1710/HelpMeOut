import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
const GetStarted = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <img src={logo} alt="logo" />

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[28px] font-bold">Log in or Sign up</h1>
          <p className="text-[#434343] text-[14px] leading-5 w-[321px] text-center">
            Join millions of others in sharing successful moves on HelpMeOut
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 items-center mt-4 max-w-2xl w-full p-3">
          <button className="flex items-center gap-6 border rounded px-7 py-1 hover:bg-[#120B88] hover:text-[white]">
            <FcGoogle />
            Continue with Google
          </button>

          <button className="flex items-center gap-4 border rounded px-6 py-1 hover:bg-[#120B88] hover:text-[white]">
            <FaFacebook />
            Continue with Facebook
          </button>

          <div className="flex items-center justify-center w-full mt-2 px-4">
            <div className="border-b border-b-[#B9C2C8] w-1/4"></div>
            <p className="mx-2 text-[#B9C2C8]">or</p>
            <div className="border-b border-b-[#B9C2C8] w-1/4"></div>
          </div>
          <form className=" max-w-md flex flex-col justify-center rounded-lg w-full">
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg"
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                required
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <Link to="/">
            <button
              type="submit"
              className="w-full py-2 bg-[#120B48] text-white rounded-lg hover:bg-[#120B88]"
            >
              Sign up
            </button>
            </Link>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
