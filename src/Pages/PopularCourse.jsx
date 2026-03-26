import React from 'react'
import card9 from "../assets/Image/card9.png"
import card10 from "../assets/Image/card10.png"
import card11 from "../assets/Image/card11.png"
import card12 from "../assets/Image/card12.png"
import { FaStar } from 'react-icons/fa'

const PopularCourse = () => {
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
            <section className='p-15'>
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">Popular Courses</h2>
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
                                    <button className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-[4px] uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default PopularCourse
