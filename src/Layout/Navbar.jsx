import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import logo from '../assets/Image/logoremovebg.png'

const Navbar = () => {
  const [openExplore, setOpenExplore] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Learning");

  return (
    <div className="relative w-full bg-white">

      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between px-10 py-4">

        {/* Logo */}
        {/* <h1 className="text-3xl font-bold">LOGO</h1> */}
        <img src={logo} className="h-[50px]"/>

        {/* Main Menu */}
        <ul className="flex items-center gap-8 font-medium text-[16px]">

          <li
            onClick={() => setOpenExplore(!openExplore)}
            className="flex items-center gap-2 cursor-pointer"
          >
            Explore <FaChevronDown size={12} />
          </li>

          {/* <Link to="/events" className="flex items-center gap-2 cursor-pointer">
            Events <FaChevronDown size={12} />
          </Link>

          <Link to="/resources" className="flex items-center gap-2 cursor-pointer">
            Resources <FaChevronDown size={12} />
          </Link> */}

          <Link to="/web-calender" className="cursor-pointer">
            Calendar
          </Link>

          <Link to="/pricing" className="cursor-pointer">
            Pricing
          </Link>

        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="border border-gray-400 px-5 py-2 rounded-full text-sm"
          >
           Login
          </Link>

          <Link
            to="/signup"
            className="bg-[#FCCC18] px-5 py-2 rounded-full font-semibold flex items-center gap-2"
          >
            {/* Let's Talk <FaArrowUpRightFromSquare size={12} /> */}
            Signup
          </Link>

        </div>

      </div>

      {/* SECOND NAVBAR */}
      {/* <div className="flex items-center justify-end gap-6 px-10 pt-1 pb-2 text-[14px]">

        <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
          <span>Search here</span>
          <FaSearch />
        </div>

        <span className="text-[#646464]">|</span>

        <div className="flex items-center gap-2 cursor-pointer">
          Select Language <FaChevronDown size={10} />
        </div>

        <span className="text-[#646464]">|</span>

        <Link to="/signup" className="flex items-center gap-2 cursor-pointer">
          <FiUser />
          Signup
        </Link>

      </div> */}

      {/* EXPLORE DROPDOWN */}
      {openExplore && (
        <div className="absolute left-[199px] top-full w-full bg-white shadow-xl max-w-5xl mx-auto">

          <h2 className="font-semibold text-[30px] text-black px-3 border-l-8 border-[#EACF00]">
            Explore
          </h2>

          <div className="grid grid-cols-3 gap-10 py-8 px-10">

            {/* LEFT MENU */}
            <div className="border-r pr-10">

              <ul className="space-y-4 text-[#494743] font-semibold">

                <li
                  onClick={() => setActiveMenu("Learning")}
                  className="flex justify-between cursor-pointer hover:text-[#EACF00]"
                >
                  Learning {activeMenu === "Learning" && <span>›</span>}
                </li>

                {/* <li
                  onClick={() => setActiveMenu("Assignments")}
                  className="flex justify-between cursor-pointer hover:text-[#EACF00]"
                >
                  Assignments {activeMenu === "Assignments" && <span>›</span>}
                </li>

                <li
                  onClick={() => setActiveMenu("Compliance")}
                  className="flex justify-between cursor-pointer hover:text-[#EACF00]"
                >
                  Compliance {activeMenu === "Compliance" && <span>›</span>}
                </li> */}

              </ul>

            </div>


            {/* RIGHT OPTIONS */}

            <div>

              {activeMenu === "Learning" && (
                <div className="space-y-4 font-semibold">

                  <Link to="/all-courses" className="block hover:text-[#EACF00]">
                    All Courses
                  </Link>

                  <Link to="/learning-path" className="block hover:text-[#EACF00]">
                    Learning Paths
                  </Link>

                  <Link to="/recommended" className="block hover:text-[#EACF00]">
                    Recommended
                  </Link>

                  <Link to="/trainings" className="block hover:text-[#EACF00]">
                    Trainings
                  </Link>

                  <Link to="/categories" className="block hover:text-[#EACF00]">
                    Categories
                  </Link>

                </div>
              )}


              {activeMenu === "Assignments" && (
                <div className="space-y-4 font-semibold">

                  <Link to="/pending-assignments" className="block hover:text-[#EACF00]">
                    Pending Assignments
                  </Link>

                  <Link to="/submitted-assignments" className="block hover:text-[#EACF00]">
                    Submitted Assignments
                  </Link>

                  <Link to="/grades" className="block hover:text-[#EACF00]">
                    Grades
                  </Link>

                </div>
              )}


              {activeMenu === "Compliance" && (
                <div className="space-y-4 font-semibold">

                  <Link to="/policies" className="block hover:text-[#EACF00]">
                    Policies
                  </Link>

                  <Link to="/training-programs" className="block hover:text-[#EACF00]">
                    Training Programs
                  </Link>

                  <Link to="/reports" className="block hover:text-[#EACF00]">
                    Reports
                  </Link>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Navbar;