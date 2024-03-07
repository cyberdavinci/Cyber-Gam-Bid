import React from "react";
import { Link } from "react-router-dom";
import { publicMenus } from "../../constants/menus";

const SideBar = () => {
  return (
    <div style={{ width: 300 }} className="bg-white h-full">
      <div className="flex flex-col">
        <Link to="/" className="w-full text-decoration-none mb-5">
          <img src="/images/logo.png" className="w-full h-12 object-cover" />
        </Link>
        {publicMenus.map((menu) => (
          <Link
            className="text-black p-2 text-decoration-none text-lg w-full hover:bg-gray-50 flex items-center gap-3"
            key={`public-menu-${menu.title}`}
            to={menu.link}
          >
            {menu.icon} {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
