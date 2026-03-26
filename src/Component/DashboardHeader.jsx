import React from "react";
import { BiSolidBell } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const DashboardHeader = () => {
  const navigate = useNavigate("");
  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-6">

      {/* Left Profile */}
      <div className="w-10 h-10 flex items-center justify-center border border-black rounded-full">
        <FaUser className="text-black text-lg" />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-xl text-black">
        <BiSolidBell onClick={()=> navigate('notification')} />
        {/* <HiCalendar /> */}
      </div>

    </div>
  );
};

export default DashboardHeader;