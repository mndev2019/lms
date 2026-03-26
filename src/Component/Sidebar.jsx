import { NavLink, useNavigate } from "react-router-dom";
import {
  MdAccessTime,
  MdBarChart,
  MdSettings
} from "react-icons/md";
import { TbFoldersFilled, TbLayoutDashboardFilled } from "react-icons/tb";
import { IoDocuments } from "react-icons/io5";
import { HiCalendar } from "react-icons/hi";
import { BiSolidBookAlt } from "react-icons/bi";
import { FaBasketShopping, FaFolderMinus } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { MdCardGiftcard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
// import logo from '../assets/Image/logoremovebg.png'


const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: TbLayoutDashboardFilled },
  { name: "Home", path: "/", icon: AiFillHome },
  { name: "Courses", path: "/dashboard/view-course", icon: IoDocuments },
  { name: "Access Code", path: "/dashboard/access-code", icon: MdCardGiftcard },
    { name: "Notification", path: "/dashboard/notification", icon: IoNotificationsCircle },
  { name: "Profile", path: "/dashboard/profile", icon: CgProfile },
  { name: "Purchase History", path: "/dashboard/purchase-history", icon: FaHistory },
  // { name: "Calendar", path: "/dashboard/calendar", icon: HiCalendar },
  // { name: "Content", path: "/dashboard/content", icon: BiSolidBookAlt },
  // { name: "Live Classes", path: "/dashboard/live-classes", icon: FaBasketShopping },
  // { name: "Exams", path: "/dashboard/exams", icon: FaFolderMinus },
  // { name: "Assessments", path: "/dashboard/assessments", icon: TbFoldersFilled },
  // { name: "Attendance", path: "/dashboard/attendance", icon: MdAccessTime },
  // { name: "Reports", path: "/dashboard/reports", icon: MdBarChart },
  // { name: "Settings", path: "/dashboard/settings", icon: MdSettings }
];

function Sidebar() {
  const navigate = useNavigate("");
  const handleLogout = () => {
  localStorage.clear();
  navigate("/");
};
  return (
    <div className="w-64 h-screen bg-[#595353] text-white flex flex-col">

      {/* Logo */}
      <div className="p-3 text-2xl font-bold border-b border-black bg-white">
        {/* LOGO */}
        {/* <img onClick={() => navigate('/')} src={logo} className="h-[50px]" /> */}
        <div className="text-3xl text-black tracking-tighter text-center">
          Ramot<span className="text-yellow-400 font-normal">LMS</span>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 mt-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/dashboard"} // ✅ FIX
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-[16px] transition font-semibold
                ${isActive
                  ? "bg-[#988700] text-white"
                  : "text-[#F3F1EC] hover:bg-[#988700]"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}

   {/* Logout Item */}
<div
  onClick={handleLogout}
  className="flex items-center gap-3 px-6 py-3 mt-2 text-[16px] font-semibold text-red-300 hover:bg-red-500/20 hover:text-red-400 cursor-pointer transition"
>
  <FiLogOut size={20} />
  Logout
</div>
      </div>

      {/* Bottom */}
      <div className="p-5 border-t border-black">
        <p className="font-semibold">Go to Site</p>
        <p className="text-xs text-gray-300">
          Check how your website appears to learners.
        </p>
      </div>
  

    </div>
  );
}

export default Sidebar;