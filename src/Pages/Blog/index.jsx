import React from "react";
import { FaRegClock, FaUserCircle } from "react-icons/fa";
import blog1 from '../../assets/Image/blog1.png'
import blog2 from '../../assets/Image/blog2.png'
import blog3 from '../../assets/Image/blog3.png'

const blogs = [
  {
    id: 1,
    title: " Technical Analysis vs. Fundamental Analysis: Which is better?",
    author: "Dr. Ashish Jain",
    date: "Sat Feb 03, 2026",
    description:
      "Is it better to read charts or balance sheets? We compare the two most popular investing strategies to help you decide which one fits your risk profile and long-term financial goals.",
    image:blog1,
  },
  {
    id: 2,
    title: "The 2026 Developer Roadmap: How to Learn Online Without Burning Out",
    author: "Neha Sharma",
    date: "Mon Feb 10, 2026",
    description:
      " Information overload is the biggest enemy of online students. Discover the exact 4-step framework we use to help our students master complex topics like React and System Design while spending only 2 hours a day in front of the screen.",
    image:blog2,
  },
  {
    id: 3,
    title: "Sunday Market Breakdown: Live Technical Analysis for the Week Ahead",
    author: "Rahul Mehta",
    date: "Wed Feb 14, 2026",
    description:
      "Stop guessing and start analyzing. Join our live market deep-dive where we identify key support and resistance levels for the upcoming week. Learn to spot the Fake-outs that trap retail investors before they happen.",
    image:blog3,
  },
  
];

const Blog = () => {
  return (
    <div className="p-6 min-h-screen bg-white">

      <div className="max-w-5xl mx-auto">

        {blogs.map((blog) => (
          <div key={blog.id} className="pb-10 pt-4 border-b border-gray-400">

            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[350px] object-cover"
            />

            {/* Content */}
            <div className="mt-6">

              {/* Title */}
              <h2 className="text-3xl font-medium text-(--primary)">
                {blog.title}
              </h2>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-400 mt-3">
                <div className="flex items-center gap-2">
                  <FaRegClock />
                  <span>{blog.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaUserCircle />
                  <span>{blog.author}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mt-4 leading-7 text-[15px]">
                {blog.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Blog;