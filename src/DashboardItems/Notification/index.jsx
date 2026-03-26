import React, { useState } from "react";
import { FaCheckCircle, FaBook, FaBell } from "react-icons/fa";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "purchase",
      title: "Purchase Successful",
      message: "You purchased 'Stock Market Basics'",
      time: "2h ago",
      read: false,
    },
    {
      id: 2,
      type: "course",
      title: "New Lecture Added",
      message: "React Mastery updated with new content",
      time: "5h ago",
      read: false,
    },
    {
      id: 3,
      type: "announcement",
      title: "New Announcement",
      message: "Instructor posted an update",
      time: "1 day ago",
      read: true,
    },
  ]);

  const getIcon = (type) => {
    switch (type) {
      case "purchase":
        return <FaCheckCircle />;
      case "course":
        return <FaBook />;
      default:
        return <FaBell />;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case "purchase":
        return "bg-green-100 text-green-600";
      case "course":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#595353]/10 to-white p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#595353]">Notifications</h2>
          <button className="text-sm text-blue-600 hover:underline">
            Mark all as read
          </button>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`flex items-start gap-4 p-5 rounded-xl shadow-sm border transition hover:shadow-md cursor-pointer ${
                item.read
                  ? "bg-white"
                  : "bg-gradient-to-r from-blue-50 to-white border-blue-200"
              }`}
            >
              {/* Icon */}
              <div
                className={`p-3 rounded-full ${getColor(item.type)} text-lg`}
              >
                {getIcon(item.type)}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-400">
                    {item.time}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  {item.message}
                </p>
              </div>

              {/* Unread Dot */}
              {!item.read && (
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;