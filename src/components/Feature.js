import React from "react";
import listIcon from "../assets/icon-list.svg";
const Feature = ({ content }) => {
  return (
    <>
      <div className="flex gap-2 mb-3">
        <img src={listIcon} alt="list-btn" />
        <p className="text-left font-[400] text-sm text-[#333]">{content}</p>
      </div>
    </>
  );
};

export default Feature;
