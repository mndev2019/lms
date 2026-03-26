import React from "react";
import { FaUsers, FaBookOpen, FaClipboardList, FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const stats = [
  { title: "Students", value: "1,200", icon: FaUsers },
  { title: "Courses", value: "85", icon: FaBookOpen },
  { title: "Assignments", value: "320", icon: FaClipboardList },
  { title: "Performance", value: "92%", icon: FaChartBar },
];

const courses = [
  { name: "React Basics", students: 120, progress: 70 },
  { name: "Node.js API", students: 80, progress: 50 },
  { name: "Database Design", students: 60, progress: 40 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-[#595353]/10 to-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#595353]">LMS Dashboard</h1>
          <p className="text-gray-500">Overview of your learning platform</p>
        </div>
        <button onClick={()=> navigate('create-course')} className="bg-[#595353] text-white px-4 py-2 rounded-xl shadow hover:opacity-90 transition">
          + Add Course
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="rounded-2xl shadow-lg bg-white hover:scale-105 transition p-5 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{item.title}</p>
                <h2 className="text-2xl font-bold text-[#595353]">{item.value}</h2>
              </div>
              <div className="bg-[#595353]/10 p-3 rounded-xl">
                <Icon className="w-6 h-6 text-[#595353]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Courses Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#595353]">Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, index) => (
            <div key={index} className="rounded-2xl shadow-lg bg-white hover:shadow-xl transition p-5 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-[#595353]">{course.name}</h3>
                <span className="text-xs bg-[#595353]/10 text-[#595353] px-2 py-1 rounded-lg">
                  {course.students} Students
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#595353] h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <p className="text-xs text-gray-500">
                Progress: {course.progress}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#595353]">Recent Activity</h2>
        <div className="rounded-2xl shadow-lg bg-white p-5 space-y-3">
          <div className="flex items-center justify-between bg-[#595353]/5 p-3 rounded-xl">
            <p className="text-sm">✔️ Amit completed React Basics</p>
            <span className="text-xs text-gray-400">2 min ago</span>
          </div>
          <div className="flex items-center justify-between bg-[#595353]/5 p-3 rounded-xl">
            <p className="text-sm">📘 New course added: Advanced JS</p>
            <span className="text-xs text-gray-400">10 min ago</span>
          </div>
          <div className="flex items-center justify-between bg-[#595353]/5 p-3 rounded-xl">
            <p className="text-sm">📝 Assignment submitted by Ashish</p>
            <span className="text-xs text-gray-400">30 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;