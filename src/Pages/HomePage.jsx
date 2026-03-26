import React from 'react';
import image from "../assets/Image/bannerimg.png"
import robot from "../assets/Image/robot.png"
import card1 from "../assets/Image/card1.png"
import card2 from "../assets/Image/card2.png"
import card3 from "../assets/Image/card3.png"
import card4 from "../assets/Image/card4.png"
import card5 from "../assets/Image/card5.png"
import card6 from "../assets/Image/card6.jpg"
import card7 from "../assets/Image/card7.png"
import card8 from "../assets/Image/card8.png"
import card9 from "../assets/Image/card9.png"
import card10 from "../assets/Image/card10.png"
import card11 from "../assets/Image/card11.png"
import card12 from "../assets/Image/card12.png"

import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const HomePage = () => {
    const courses = [
        {
            id: 1,
            title: "Introduction to Web Development (HTML/CSS)",
            author: "Aman Dhattarwal",
            rating: 5.0,
            count: 850,
            price: "FREE",
            oldPrice: "1,999",
            image: card1,
            color: "bg-[#EACF00]"
        },
        {
            id: 2,
            title: "UI/UX Design Basics with Figma",
            author: "Shradha Khapra",
            rating: 4.7,
            count: 420,
            price: "FREE",
            oldPrice: "2,499",
            image: card2,
            color: "bg-[#BB2E2E]"
        },
        {
            id: 3,
            title: "JavaScript Essentials for Beginners",
            author: "Code Academy",
            rating: 4.9,
            count: 1200,
            price: "FREE",
            oldPrice: "3,999",
            image: card3,
            color: "bg-[#2E58BB]"
        },
        {
            id: 4,
            title: "Tailwind CSS Crash Course",
            author: "Ishita Sharma",
            rating: 5.0,
            count: 310,
            price: "FREE",
            oldPrice: "1,499",
            image: card4,
            color: "bg-[#35BB2E]",
            bestSeller: true
        }
    ];
    const intermidiatecourses = [
        {
            id: 1,
            title: "Mastering React: Hooks, Context & State Management",
            author: "Shradha Khapra",
            rating: 5.0,
            count: 850,
            price: "FREE",
            oldPrice: "1,999",
            image: card5,
            color: "bg-[#EACF00]"
        },
        {
            id: 2,
            title: "Backend Development with Node.js & MongoDB",
            author: "Aman Dhattarwal",
            rating: 4.7,
            count: 420,
            price: "499",
            oldPrice: "1,499",
            image: card6,
            color: "bg-[#BB2E2E]",
            bestSeller: true
        },
        {
            id: 3,
            title: "Advanced UI/UX: Design Systems & Prototyping",
            author: "Vikram Malhotra",
            rating: 4.9,
            count: 1200,
            price: "999",
            oldPrice: "1,999",
            image: card7,
            color: "bg-[#2E58BB]"
        },
        {
            id: 4,
            title: "MERN Stack Bootcamp: Build a Social Media App",
            author: "Kabir Singh",
            rating: 5.0,
            count: 310,
            price: "FREE",
            oldPrice: "1,499",
            image: card8,
            color: "bg-[#35BB2E]",

        }
    ];
    const advancedCourses = [
        {
            id: 1,
            title: "System Design: Building Scalable Microservices",
            author: "Aditya Verma",
            rating: 5.0,
            count: 850,
            price: "999",
            oldPrice: "1,999",
            image: card9,
            color: "bg-[#EACF00]",
            badge: "Industry Standard"
        },
        {
            id: 2,
            title: "The CTO Blueprint: Engineering Leadership",
            author: "Vikram Malhotra",
            rating: 4.9,
            count: "210",
            price: "1,499",
            oldPrice: "2,499",
            image: card10,
            color: "bg-[#BB2E2E]",
            bestSeller: true
        },
        {
            id: 3,
            title: "Advanced DevOps: CI/CD, Docker & Kubernetes",
            author: "Rohan Das",
            rating: 4.9,
            count: 1200,
            price: "2,999",
            oldPrice: "3,999",
            image: card11,
            color: "bg-[#2E58BB]"
        },
        {
            id: 4,
            title: "AI & Machine Learning for Web Engineers",
            author: "Ananya Iyer",
            rating: 5.0,
            count: 310,
            price: "1,099",
            oldPrice: "1,499",
            image: card12,
            color: "bg-[#35BB2E]",

        }
    ];
    return (
        <>
            <section className="mb-4 bg-[#716A5C] text-[#F3F1EC] font-sans selection:bg-yellow-400 selection:text-[#F3F1EC] py-0">

                {/* --- HERO SECTION --- */}
                <main className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:pl-22 lg:pt-0 ">

                    {/* Left: Heading & Rocket Illustration */}
                    <div className="w-full lg:w-1/2  ">
                        <h1 className=" mb-12 text-5xl md:text-[42px] font-extrabold leading-[1.1] mb-8">
                            Boost Your <br />
                            <span className="text-yellow-400 decoration-4 underline-offset-8">Investing</span> <br />
                            Knowledge.
                        </h1>

                        {/* Decorative Rocket/Coins - Use your actual image asset here */}
                        <div className="w-64 md:w-80 opacity-90 animate-pulse ">
                            <img
                                src={robot}
                                alt="Investing Growth"
                                className="rounded-lg mix-blend-screen"
                            />
                        </div>
                    </div>

                    {/* Middle: Syllabus Breakdown */}
                    <div className="w-full lg:w-2/5 space-y-6 pt-5">
                        <div className="inline-block bg-yellow-400 text-black font-bold px-3 py-1 text-lg uppercase rounded-[2px]">
                            3 Levels. 8 Courses. 1 Mission.
                        </div>

                        <div className="grid gap-4">
                            {/* Beginner */}
                            <section>
                                <button className="text-yellow-400 rounded-[2px] font-semibold text-lg tracking-widest border-1 px-2 border-yellow-400 inline-block mb-2 uppercase">

                                    Beginner
                                </button>
                                <ul className="text-md text-[#F3F1EC] font-medium">
                                    <li className="flex items-center"><span className="text-yellow-400 mr-2">•</span> Basics Of Stock Market.</li>
                                    <li className="flex items-center"><span className="text-yellow-400 mr-2">•</span> Magic Of Mutual Funds.</li>
                                    <li className="flex items-center"><span className="text-yellow-400 mr-2">•</span> Mastering Money Management.</li>
                                </ul>
                            </section>

                            {/* Intermediate */}
                            <section>
                                <button className="text-yellow-400 rounded-[2px] font-semibold text-lg tracking-widest border-1 px-2 border-yellow-400 inline-block mb-2 uppercase">
                                    Intermediate
                                </button>
                                <ul className="text-md text-[#F3F1EC] font-medium">
                                    <li className="flex items-center"><span className="text-yellow-400 mr-2">•</span> Fundamental Analysis.</li>
                                    <li className="flex items-center"><span className="text-yellow-400 mr-2">•</span> Technical Analysis.</li>
                                </ul>
                            </section>

                            {/* Advanced */}
                            <section>
                                <button className="text-yellow-400 rounded-[2px] font-semibold text-lg tracking-widest border-1 px-2 border-yellow-400 inline-block mb-2 uppercase">
                                    Advanced
                                </button>
                                <ul className="text-md text-[#F3F1EC] font-medium">
                                    <li className="flex items-center"><span className="text-yellow-400 mr-2">•</span> Decoding Price Action Analysis.</li>
                                    <li className="flex items-center"><span className="text-yellow-400 mr-2">•</span> Futures and Options.</li>
                                    <li className="flex items-center"><span className="text-yellow-400 mr-2">•</span> Art of Value Investing.</li>
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Right: Instructor (Positioned absolutely on large screens to mimic image) */}
                    <div className="lg:w-2/5">
                        <img
                            src={image}
                            alt="Instructor"
                            className="max-h-[60vh] lg:max-h-[75vh] object-contain grayscale-0 hover:grayscale transition-all duration-500"
                        />
                    </div>
                </main>
            </section>
            <section className="bg-white py-12 px-6 md:px-20 font-sans">
                {/* --- Section Header --- */}
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">Beginner Courses</h2>
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-yellow-400 rounded-full" /> {/* Yellow Sidebar */}
                        <span className="text-lg font-medium text-gray-700">Certified Self-Paced Learning Programs</span>
                    </div>
                </div>

                {/* --- Grid Layout --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div key={course.id}  className="group flex flex-col bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300">

                            {/* Image Header */}
                            <div className={`relative h-44 ${course.color} overflow-hidden`}>
                                {course.bestSeller && (
                                    <div className="absolute top-3 left-2 z-10 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                                        Best Seller
                                    </div>
                                )}
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 pt-2" />

                                {/* Device Icons */}
                                {/* <div className="absolute bottom-2 left-3 flex gap-2 text-white/90">
                <FaAndroid size={14} />
                <FaApple size={14} />
              </div> */}
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex-grow flex flex-col">
                                <h3 className="text-sm font-semibold text-gray-800 mb-4 line-clamp-2 min-h-[40px]">
                                    {course.title}
                                </h3>

                                {/* Rating Section */}
                                <div className="flex items-center gap-1 mb-1">
                                    <div className="flex text-[#EACF00]">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} size={14} fill={i < Math.floor(course.rating) ? "currentColor" : "none"} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
                                        {course.rating} ({course.count} ratings)
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 mb-6">{course.author}</p>

                                {/* Price & Action */}
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 line-through">₹{course.oldPrice}</span>
                                        <span className="text-lg font-bold text-blue-600">₹{course.price}</span>
                                    </div>
                                  <Link to="/course-page" className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-[4px] uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors">
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-[#FBF9F4] py-12 px-6 md:px-20 font-sans">
                {/* --- Section Header --- */}
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">Intermediate Batches</h2>
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-yellow-400 rounded-full" /> {/* Yellow Sidebar */}
                        <span className="text-lg font-medium text-gray-700">Professional Skills & Real-World Projects</span>
                    </div>
                </div>

                {/* --- Grid Layout --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {intermidiatecourses.map((course) => (
                        <div key={course.id} className="group flex flex-col bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300">

                            {/* Image Header */}
                            <div className={`relative h-44 ${course.color} overflow-hidden`}>
                                {course.bestSeller && (
                                    <div className="absolute top-3 left-2 z-10 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                                        Best Seller
                                    </div>
                                )}
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 pt-2" />

                                {/* Device Icons */}
                                {/* <div className="absolute bottom-2 left-3 flex gap-2 text-white/90">
                <FaAndroid size={14} />
                <FaApple size={14} />
              </div> */}
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex-grow flex flex-col">
                                <h3 className="text-sm font-semibold text-gray-800 mb-4 line-clamp-2 min-h-[40px]">
                                    {course.title}
                                </h3>

                                {/* Rating Section */}
                                <div className="flex items-center gap-1 mb-1">
                                    <div className="flex text-[#EACF00]">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} size={14} fill={i < Math.floor(course.rating) ? "currentColor" : "none"} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
                                        {course.rating} ({course.count} ratings)
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 mb-6">{course.author}</p>

                                {/* Price & Action */}
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 line-through">₹{course.oldPrice}</span>
                                        <span className="text-lg font-bold text-blue-600">₹{course.price}</span>
                                    </div>
                                  <Link to="/course-page" className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-[4px] uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors">
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-white py-12 px-6 md:px-20 font-sans">
                {/* --- Section Header --- */}
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">Advanced Batches</h2>
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-yellow-400 rounded-full" /> {/* Yellow Sidebar */}
                        <span className="text-lg font-medium text-gray-700">Professional Certification & Architecture Programs</span>
                    </div>
                </div>

                {/* --- Grid Layout --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advancedCourses.map((course) => (
                        <div key={course.id} className="group flex flex-col bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300">

                            {/* Image Header */}
                            <div className={`relative h-44 ${course.color} overflow-hidden`}>
                                {course.bestSeller && (
                                    <div className="absolute top-3 left-2 z-10 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                                        Best Seller
                                    </div>
                                )}
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 pt-2" />

                        
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex-grow flex flex-col">
                                <h3 className="text-sm font-semibold text-gray-800 mb-4 line-clamp-2 min-h-[40px]">
                                    {course.title}
                                </h3>

                                {/* Rating Section */}
                                <div className="flex items-center gap-1 mb-1">
                                    <div className="flex text-[#EACF00]">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} size={14} fill={i < Math.floor(course.rating) ? "currentColor" : "none"} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
                                        {course.rating} ({course.count} ratings)
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 mb-6">{course.author}</p>

                                {/* Price & Action */}
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 line-through">₹{course.oldPrice}</span>
                                        <span className="text-lg font-bold text-blue-600">₹{course.price}</span>
                                    </div>
                                    <Link to="/course-page" className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-[4px] uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors">
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;