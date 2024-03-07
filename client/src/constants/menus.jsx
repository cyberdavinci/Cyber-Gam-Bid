import {
  FaCircleInfo,
  FaDoorClosed,
  FaDoorOpen,
  FaGauge,
  FaUserLock,
} from "react-icons/fa6";

export const publicMenus = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <FaGauge />,
  },
  {
    title: "Auctions",
    link: "/",
    icon: <FaDoorOpen />,
  },
  {
    title: "Your Catalog",
    link: "/catalog",
    icon: <FaDoorClosed />,
  },
  {
    title: "Login",
    link: "/login",
    icon: <FaUserLock />,
  },
  {
    title: "Help",
    link: "/help",
    icon: <FaCircleInfo />,
  },
];
