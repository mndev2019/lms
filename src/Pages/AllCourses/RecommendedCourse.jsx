import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tick from '../../assets/Image/tick.png'
import uiux from '../../assets/Image/uiux.jpg'
import react from '../../assets/Image/python.jpg'
import web from '../../assets/Image/recentcourse.png'

const RecommendedCourse = () => {
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,        // enables auto scroll
    autoplaySpeed: 2000,   // time between slides (in ms)
    pauseOnHover: true     // optional: pause when mouse hover
};
    const courses = [
        {
            id: 1,
            title: "Advanced Web Development",
            subtitle:"Build modern websites and applications with practical projects and guided lessons.",
            image: web,
            tag: "New",
        },
        {
            id: 2,
            title: "UI / UX Design Fundamentals",
            image: uiux,
            subtitle:"Learn the core principles of user interface and experience design.",
            tag: "Bestseller",
        },
        {
            id: 3,
            title: "React Development Masterclass",
            image: react,
             subtitle:"Learn the core principles of user interface and experience design.",
            tag: "Popular",
        },
    ];
    return (
        <>
            <section className=" py-20">
                <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT SIDE */}
                    <div className='pl-5'>

                        <h2 className="text-4xl font-bold text-(--text-primary) mb-4 inria">
                            Trending & Highly <br /> Recommended Courses
                        </h2>

                        <p className="text-black font-medium text-[20px] mb-10">
                            Discover the courses most loved by our learners.
                        </p>

                        <Slider {...settings}>
                            {courses.map((course) => (
                                <div key={course.id} className="px-3">

                                    <div className="bg-white rounded-[8px] shadow-md overflow-hidden">

                                        <div className="relative">

                                            <img
                                                src={course.image}
                                                alt=""
                                                className="w-full h-48 object-cover"
                                            />

                                            <span className="absolute bottom-[-10px] right-0 bg-[#BB2E2E] text-white text-xs px-4 py-1 ">
                                                {course.tag}
                                            </span>

                                        </div>

                                        <div className="p-5">
                                            <div className='flex gap-4 items-center'>
                                                <span className="text-xs bg-[#ABC7FF] text-white  px-5 py-1 rounded-full">
                                                    Instructor
                                                </span>
                                                <p className='underline text-[14px] text-(--text-primary)'>
                                                    By Alex Carter
                                                </p>
                                            </div>


                                            <h3 className="font-bold text-[16px] text-(--text-primary) mt-3 mb-2">
                                                {course.title}
                                            </h3>
                                            <p className='text-(--primary) font-medium text-[12px]'>
                                                Build modern websites and applications with practical projects and guided lessons.
                                            </p>
                                            <p className='text-[14px] font-semibold text-(--text-primary) mt-3'>
                                                Course Details:
                                                <span className='text(--primary) font-semibold text-[12px]'> 8 Modules • 24 Lessons • 6 Hours
                                                </span>
                                            </p>

                                            <button className="mt-3 bg-[#2E58BB] text-white px-4 py-1 rounded">
                                                Enroll Now →
                                            </button>

                                        </div>

                                    </div>

                                </div>
                            ))}
                        </Slider>

                    </div>


                    {/* RIGHT SIDE BOX */}
                    <div className='relative'>
                        <div className="bg-(--primary) text-white p-10 ">

                            <p className="mb-6 font-medium text-[20px] text-(--text-secondary) ">
                                Create your account and start building courses, hosting live classes,
                                managing students, and growing your learning platform with
                                easy-to-use tools.
                            </p>

                        </div>

                        <div className="bg-(--text-secondary)  bg p-8 rounded-lg shadow-lg absolute left-[-37px] bottom-[135px] w-[85%]">

                            <h3 className="text-[25px] font-bold text-(--text-primary) mb-4 ">
                                See How You Can Start
                            </h3>

                            <ul className="space-y-3 text-(--text-primary)">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <img src={tick} className='h-[30px]' />
                                    </div>
                                    <p className="text-(--text-primary) font-regular text-[18px] ">
                                        Create and manage courses
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <img src={tick} className='h-[30px]' />
                                    </div>
                                    <p className="text-(--text-primary) font-regular text-[18px] ">
                                        Host live classes
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <img src={tick} className='h-[30px]' />
                                    </div>
                                    <p className="text-(--text-primary) font-regular text-[18px] ">
                                        Track students and progress
                                    </p>
                                </div>



                            </ul>

                            <button className="mt-6 px-7 py-2 rounded-full  hover:bg-[#e6c800] transition font-medium bg-(--yellow) text-black noto">
                                Start Your Free Trial
                            </button>

                        </div>
                    </div>






                </div>
            </section>
        </>
    )
}

export default RecommendedCourse
