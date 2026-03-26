import React from 'react'
import RecentCourse from './RecentCourse'
import uiux from '../../assets/Image/uiux.jpg'
import python from '../../assets/Image/python.jpg'
import pm from '../../assets/Image/pm.jpg'

const EnrolledCourse = () => {
    const courses = [
        {
            id: 1,
            title: "UX Design Basics for Beginners",
            instructor: "Sarah Jenkins",
            progress: 20,
            image:uiux,
            button: "Continue",
        },
        {
            id: 2,
            title: "Python Data Science Bootcamp",
            instructor: "Dr. Alan Grant",
            progress: 20,
            image:python,
            button: "Continue",
        },
        {
            id: 3,
            title: "Agile Project Management Masterclass",
            instructor: "Emily Chen",
            progress: 100,
            image:pm,
            remaining: "6h 30m",
            button: "Start Course",
        },
    ];
    return (
        <>
            <section className='px-30 py-15'
                style={{
                    background: "linear-gradient(180deg, #FFFFFF 0.97%, #F2EFE6 57.7%)"
                }}
            >
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <h2 className='inria text-(--text-primary) font-semibold text-[40px]  w-[60%] mx-auto'>
                                Welcome Back!
                            </h2>
                            <p className='text-(--text-primary) text-[20px] w-[60%] mx-auto mt-5 font-light'>
                                You’ve spent 3.5 hours learning this week. Keep building your skills and stay consistent.
                            </p>
                        </div>
                    </div>
                    <RecentCourse />
                    <div className="flex justify-between items-center my-8">
                        <h2 className="text-[25px] text-(--text-primary) font-bold ">
                            Your Enrolled Courses
                        </h2>

                        <div className="flex gap-4">
                            <button className="px-4 py-1 rounded-md bg-(--primary) text-white">
                                All
                            </button>
                            <button className="text-gray-600">Active</button>
                            <button className="text-gray-600">Completed</button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-6">

                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-[19px] shadow-md overflow-hidden"
                            >

                                {/* Image */}
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="h-44 w-full object-cover"
                                />

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-[18px] font-semibold text-(--text-primary) mb-1">
                                        {course.title}
                                    </h3>

                                    <p className="text-[16px] text-(--text-primary) mb-4">
                                        Instructor: {course.instructor}
                                    </p>

                                    {course.progress !== 100 && (
                                        <>
                                            <div className="flex justify-between text-sm text-gray-500 mb-1">
                                                <span>Progress</span>
                                                <span>{course.progress}%</span>
                                            </div>

                                            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                                <div
                                                    className="bg-blue-500 h-2 rounded-full"
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                        </>
                                    )}

                                    {course.remaining && (
                                        <p className="text-sm text-(--text-primary) font-bold mb-4">
                                            ⏱ Remaining Time: {course.remaining}
                                        </p>
                                    )}

                                    {/* Button */}
                                    <button
                                        className={`w-full py-2 rounded-lg font-medium ${course.button === "Start Course"
                                                ? "bg-[#2E58BB] text-white"
                                                : "border border-gray-300 text-gray-700"
                                            }`}
                                    >
                                        {course.button}
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default EnrolledCourse




