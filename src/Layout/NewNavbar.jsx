import React from "react";
import { Link } from "react-router-dom";

import { FaChevronDown, FaArrowUpRightFromSquare } from "react-icons/fa6";


const NewNavbar = () => {


    return (
        <div className="relative w-full bg-white">

            {/* TOP NAVBAR */}
            <div className="flex items-center justify-between px-10 py-4">

                {/* Logo */}
                <div className="text-3xl font-black tracking-tighter">
                    Ramot<span className="text-yellow-400 font-normal">LMS</span>
                </div>

                {/* Main Menu */}
                <ul className="flex items-center gap-8 font-medium text-[16px]">
                       <li

                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Link to="/" className="cursor-pointer">
                            Home
                        </Link>
                    </li>
                    <li

                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Link to="/blog" className="cursor-pointer">
                            Blog
                        </Link>
                    </li>
                     <li

                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Link to="/popular-course" className="cursor-pointer">
                            Course
                        </Link>
                    </li>
                     <li

                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Link to="/live-webinar" className="cursor-pointer">
                            Live Webinar
                        </Link>
                    </li>



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





        </div>
    );
};

export default NewNavbar;