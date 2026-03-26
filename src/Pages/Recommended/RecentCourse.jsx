import React from "react";
import recentcourse from '../../assets/Image/recentcourse.png'

const RecentCourse = () => {
    const progress = 65; // progress percentage

    return (
        <>
        <div className="">
 <h2 className="text-[25px] text-(--text-primary) font-bold my-5">
                Continue Your Learning
            </h2>


            <div className="grid grid-cols-12 bg-white shadow rounded-[19px] items-center">
                <div className="col-span-4">
                    <img
                        src={recentcourse}
                        alt="course"
                        className="h-[300px]  object-cover"
                    />
                </div>
                <div className="col-span-8 p-8">
                    {/* Top row */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="bg-[#ABC7FF] text-white text-sm px-4 py-1 rounded-md font-medium">
                            Web Development
                        </span>

                        <span className="text-(--primary) text-[16px]">
                            Last accessed 2 hours ago
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-semibold text-(--text-primary)">
                        Advanced React Concepts for Enterprise Applications
                    </h3>

                    <p className="text-(--text-primary) text-[18px] mt-1">
                        Module: State Management & Context API
                    </p>

                    
                    {/* Progress Section */}
                    <div className="mt-8 flex items-center justify-between gap-6">

                        {/* Left Section */}
                        <div className="flex-1">

                            {/* Text Row */}
                            <div className="flex justify-between text-[16px] font-semibold text-(--primary) mb-2">
                                <span>{progress}% Completed</span>
                                <span>24 / 38 Lessons</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-[10px] bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>

                        </div>

                        {/* Resume Button */}
                        <button className="flex items-center gap-2 bg-[#2E58BB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                            <span className="text-white">▶</span>
                            Resume Course
                        </button>

                    </div>
                </div>
            </div>
        </div>
           
        </>
    );
};

export default RecentCourse;