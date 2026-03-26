import React from "react";
import { FaBookOpen, FaClock, FaCheckCircle } from "react-icons/fa";

const stats = [
  { title: "Enrolled Courses", value: "5", icon: FaBookOpen },
  { title: "Completed", value: "2", icon: FaCheckCircle },
  { title: "In Progress", value: "3", icon: FaClock },
];

const courses = [
  { name: "React Basics", progress: 70 },
  { name: "Node.js API", progress: 40 },
  { name: "Database Design", progress: 20 },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-[#595353]/10 to-white">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#595353]">
          Welcome Back 👋
        </h1>
        <p className="text-gray-500">
          Continue your learning journey
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="rounded-2xl shadow bg-white p-5 flex items-center justify-between"
            >
              <div>
                <p className="text-gray-400 text-sm">{item.title}</p>
                <h2 className="text-2xl font-bold text-[#595353]">
                  {item.value}
                </h2>
              </div>
              <div className="bg-[#595353]/10 p-3 rounded-xl">
                <Icon className="text-[#595353]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue Learning */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#595353]">
          Continue Learning
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-5 space-y-4 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-[#595353]">
                {course.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#595353] h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {course.progress}% completed
                </span>

                <button className="text-sm bg-[#595353] text-white px-3 py-1 rounded-lg hover:opacity-90">
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Courses */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#595353]">
          Recommended for You
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="font-semibold text-[#595353]">
              Advanced JavaScript
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Upgrade your JS skills
            </p>
            <button className="mt-3 text-sm text-blue-600">
              Explore
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="font-semibold text-[#595353]">
              UI/UX Basics
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Learn design fundamentals
            </p>
            <button className="mt-3 text-sm text-blue-600">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#595353]">
          Recent Activity
        </h2>

        <div className="bg-white rounded-2xl shadow p-5 space-y-3">
          <div className="flex justify-between bg-[#595353]/5 p-3 rounded-xl">
            <p className="text-sm">
              📚 You enrolled in React Basics
            </p>
            <span className="text-xs text-gray-400">
              1 hour ago
            </span>
          </div>

          <div className="flex justify-between bg-[#595353]/5 p-3 rounded-xl">
            <p className="text-sm">
              🎯 Completed Module 1
            </p>
            <span className="text-xs text-gray-400">
              Yesterday
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;