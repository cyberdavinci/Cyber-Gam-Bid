import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className="bg-white flex items-center justify-between px-3 "
      style={{
        height: 75,
      }}
    >
      {/* left */}
      <h5 className="font-bold text-gray-500 h5 m-0">{title}</h5>
    </div>
  );
};

export default Header;
