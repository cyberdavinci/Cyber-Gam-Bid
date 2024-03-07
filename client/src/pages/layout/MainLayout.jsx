import React from "react";
import { publicMenus } from "../../constants/menus";
import { Link } from "react-router-dom";
import CustomPageDetails from "../../components/generic/CustomPageDetails";
import SideBar from "../../components/layout/SideBar";
import Header from "../../components/layout/Header";

const MainLayout = ({ children, title }) => {
  return (
    <div className="h-screen flex items-stretch bg-gray-100 overflow-y-hidden">
      <CustomPageDetails title={title} />
      {/* Side bar */}
      <SideBar />
      <div className="flex-1 flex flex-col">
        {/* header */}
        <Header title={title} />

        {/* content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden container-fluid py-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
