import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div className="py-3">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white bg-black border-none outline-none rounded-2xl p-2 text-sm px-2 hover:opacity-80"
      >
        <FaChevronLeft /> Go Back
      </button>
    </div>
  );
};

export default BackBtn;
