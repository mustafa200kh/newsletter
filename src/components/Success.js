import React from "react";
import successSVG from "../assets/icon-success.svg";
import { Link } from "react-router-dom";
function Success() {
  return (
    <div className="App w-full h-[100vh] bg-[#36384d] flex items-center justify-center">
      <div className="success flex flex-col justify-center w-[100%] md:w-[30%] p-4 md:p-8 bg-white md:rounded-2xl h-[100vh] md:h-fit">
        <div className="image max-w-full mb-8">
          <img src={successSVG} alt="check" />
        </div>
        <h1 className="font-[700] text-4xl text-[#232742] mb-5">
          Thanks for Subscribing!
        </h1>
        <p className="text-left text-sm font-[400] text-[#333] mb-5">
          a confirmation email has been sent to {} please open it and click the
          button inside to confirm your Subscription
        </p>
        <Link to={`/`}>
          <button className="block rounded-lg w-full p-3 text-center text-white bg-gradient-to-r from-[#232742] to-[#232742] hover:from-pink-500 hover:to-yellow-500">
            Dismiss message
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
