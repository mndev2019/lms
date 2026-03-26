import React from "react";
import { FaRegClock, FaUserCircle } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "What is Buyback of Shares?",
    author: "Dr. Ashish Jain",
    date: "Sat Feb 03, 2026",
    description:
      "As we are on our journey of understanding corporate actions, share buyback is a key concept. Companies often repurchase their own shares to increase shareholder value, improve financial ratios, and signal confidence in their business.",
    image:
      "https://images.unsplash.com/photo-1604594849809-dfedbc827105",
  },
  {
    id: 2,
    title: "Understanding Stock Market Basics",
    author: "Neha Sharma",
    date: "Mon Feb 10, 2026",
    description:
      "The stock market is a platform where buyers and sellers trade shares. Understanding how stock prices move, what drives demand and supply, and how investors make decisions is essential for beginners entering the financial world.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
  },
  {
    id: 3,
    title: "Top 5 Investment Strategies for Beginners",
    author: "Rahul Mehta",
    date: "Wed Feb 14, 2026",
    description:
      "Investing can be overwhelming for beginners, but with the right strategies like SIP, diversification, and long-term investing, you can build a strong financial foundation and minimize risks.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
  },
  {
    id: 4,
    title: "What is IPO and How It Works?",
    author: "Priya Verma",
    date: "Fri Feb 20, 2026",
    description:
      "An Initial Public Offering (IPO) is when a private company offers its shares to the public for the first time. It allows companies to raise capital while giving investors an opportunity to invest early.",
    image:
      "https://images.unsplash.com/photo-1642543348745-0c3e8a5c50b1",
  },
  {
    id: 5,
    title: "Technical Analysis vs Fundamental Analysis",
    author: "Amit Singh",
    date: "Sun Feb 25, 2026",
    description:
      "Technical analysis focuses on price patterns and charts, while fundamental analysis evaluates a company's financial health. Both approaches help investors make informed decisions in different ways.",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2",
  },
  {
    id: 6,
    title: "How to Read Candlestick Charts",
    author: "Kavita Gupta",
    date: "Tue Mar 02, 2026",
    description:
      "Candlestick charts are essential tools in trading. They help traders understand price movements, trends, and market psychology using patterns like Doji, Hammer, and Engulfing candles.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
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
              className="w-full h-[300px] object-cover"
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