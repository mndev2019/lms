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
import logo from '../assets/Image/logoremovebg.png'

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: TbLayoutDashboardFilled },
  { name: "Courses", path: "/dashboard/view-course", icon: IoDocuments },
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
  return (
    <div className="w-64 h-screen bg-[#595353] text-white flex flex-col">

      {/* Logo */}
      <div className="p-5 text-2xl font-bold border-b border-black bg-white">
        {/* LOGO */}
         <img  onClick={()=> navigate('/')} src={logo} className="h-[50px]"/>
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
                ${
                  isActive
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