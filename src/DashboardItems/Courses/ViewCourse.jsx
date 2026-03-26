import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import html from '../../assets/Image/recentcourse.png'

const ViewCourse = () => {
  const course = [
    {
      title: "HTML-5 Course",
      description:
        "Learn HTML-5 from basics to advanced with real-world projects, hooks, routing and best practices.",
      price: 999,
      isFree: false,
      cover: null,
      author: "Muskan",
      students: 120,
      time: "2 min ago",
      status: "UNPUBLISHED",
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-[#595353]/10 to-white">
      <h1 className="text-2xl font-bold text-[#595353] mb-6">
        Your Course
      </h1>

      {/* Grid (future multiple cards support) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {course.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden relative hover:scale-105 transition"
          >
            {/* Ribbon */}
            <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs px-4 py-1 rotate-[-45deg] -translate-x-8 translate-y-4 shadow">
              {item.status}
            </div>

            {/* Image */}
            
              <img
                src={html}
                alt="course"
                className="w-full h-48 object-cover"
              />
            
             
           

            {/* Content */}
            <div className="p-4 space-y-3">
              <h2 className="text-lg font-semibold text-[#595353]">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500">
                By {item.author}
              </p>

              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>

              {/* Stats */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>{item.students} students</span>
                <span>{item.time}</span>
              </div>

              {/* Price */}
              <div className="text-[#595353] font-semibold">
                {item.isFree ? "Free" : `₹ ${item.price}`}
              </div>

              {/* Actions */}
              <div className="flex justify-between pt-2 border-t">
                <button className="text-[#595353] hover:scale-110 transition">
                  <FaEye />
                </button>
                <button className="text-blue-500 hover:scale-110 transition">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:scale-110 transition">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCourse;