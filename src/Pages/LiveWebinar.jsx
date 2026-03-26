import React from 'react'
import card5 from "../assets/Image/card5.png"
import card6 from "../assets/Image/card6.jpg"
import card7 from "../assets/Image/card7.png"
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LiveWebinar = () => {

    const webinar = [
        {
            id: 1,
            title: "Mastering React: Hooks, Context & State Management",
            author: "Shradha Khapra",
            rating: 5.0,
            count: 850,
            price: "FREE",
            oldPrice: "1,999",
            image: card5,
            color: "bg-[#EACF00]",
            date: "28 Feb 2026",
            time: "7:00 PM",
            live: true
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
            bestSeller: true,
            date: "02 Mar 2026",
            time: "8:30 PM",
            live: true
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
            color: "bg-[#2E58BB]",
            date: "05 Mar 2026",
            time: "6:00 PM",
            live: true
        },
    ]

    return (
        <section className='p-10'>

            {/* Header */}
            <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">
                    Live Webinar
                </h2>

                <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-1.5 h-6 bg-yellow-400 rounded-full" />
                    <span className="text-lg font-medium text-gray-700">
                        Certified Live Webinar Programs
                    </span>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {webinar.map((course) => (

                    <div
                        key={course.id}
                        className="group flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
                    >

                        {/* Image */}
                        <div className={`relative h-44 ${course.color} overflow-hidden`}>

                            {/* LIVE Tag */}
                            {course.live && (
                                <div className="absolute top-3 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                                    LIVE
                                </div>
                            )}

                            {/* Best Seller */}
                            {course.bestSeller && (
                                <div className="absolute top-3 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                                    Best Seller
                                </div>
                            )}

                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Body */}
                        <div className="p-5 flex flex-col flex-grow">

                            {/* Title */}
                            <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[40px]">
                                {course.title}
                            </h3>

                            {/* Date & Time */}
                            <p className="text-xs text-gray-500 mb-2">
                                📅 {course.date} | ⏰ {course.time}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-1">
                                <div className="flex text-[#EACF00]">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            size={14}
                                            fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-500 font-medium">
                                    {course.rating} ({course.count})
                                </span>
                            </div>

                            {/* Speaker */}
                            <p className="text-xs text-gray-400 mb-4">
                                By {course.author}
                            </p>

                            {/* Price + Button */}
                            <div className="mt-auto flex items-center justify-between">

                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400 line-through">
                                        ₹{course.oldPrice}
                                    </span>

                                    <span className="text-lg font-bold text-green-600">
                                        {course.price === "FREE" ? "FREE" : `₹${course.price}`}
                                    </span>
                                </div>

                                <Link to="/course-page"  className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors">
                                    Buy Now
                                </Link>

                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    )
}

export default LiveWebinar