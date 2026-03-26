import React, { useState } from "react";
import { FaPaintbrush } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import {
  MdDiversity2,
  MdOutlineDesignServices,
  MdOutlineFilterVintage,
  MdOutlineSupport,
  MdOutlineWebhook,
} from "react-icons/md";
import { PiDevicesFill } from "react-icons/pi";

const tabs = [
  "Beginner Courses",
  "Intermediate Courses",
  "Advanced Courses",
  "Popular Courses",
  "New Courses",
];

const courses = [
  {
    title: "Design Thinking",
    desc: "How to apply design thinking to your problems in order to generate innovative and user-centric solutions.",
    category: "Beginner Courses",
    icon: <MdDiversity2 />,
    iconBg: "#F4EFD7",
    iconColor: "#EACF00",
  },
  {
    title: "Human Computer Interaction",
    desc: "Understand the fundamentals of interaction design, navigation, and user interface structures.",
    category: "Beginner Courses",
    icon: <PiDevicesFill />,
    iconBg: "#FDECEC",
    iconColor: "#E74C3C",
  },
  {
    title: "Interaction Design for Usability",
    desc: "Learn the basics of usability and visual design.",
    category: "Beginner Courses",
    icon: <FaPaintbrush />,
    iconBg: "#EAF3FF",
    iconColor: "#2F80ED",
  },
  {
    title: "UI Design Patterns for Software",
    desc: "Discover proven UI patterns that help users navigate easily.",
    category: "Beginner Courses",
    icon: <HiOutlineRocketLaunch />,
    iconBg: "#F3ECFF",
    iconColor: "#9B51E0",
  },
  {
    title: "Practical Guide to Usability",
    desc: "Explore key usability principles and improve user experience.",
    category: "Advanced Courses",
    icon: <MdOutlineWebhook />,
    iconBg: "#FFF4E5",
    iconColor: "#F2994A",
  },
  {
    title: "Web Design Ultimate Guide",
    desc: "Learn modern web design principles.",
    category: "Popular Courses",
    icon: <MdOutlineDesignServices />,
    iconBg: "#E8F8F5",
    iconColor: "#27AE60",
  },
  {
    title: "Create a UX Portfolio",
    desc: "Build a strong UX portfolio with case studies.",
    category: "New Courses",
    icon: <MdOutlineFilterVintage />,
    iconBg: "#F5EFFF",
    iconColor: "#BB6BD9",
  },
  {
    title: "Information Visualization",
    desc: "Present data visually to make information easier to understand.",
    category: "New Courses",
    icon: <MdOutlineSupport />,
    iconBg: "#E8F8F5",
    iconColor: "#27AE60",
  },
];

const ExperienceCourse = () => {
  const [active, setActive] = useState("Beginner Courses");

  const filteredCourses = courses.filter(
    (course) => course.category === active
  );

  return (
    <section className="bg-[var(--secondary)] py-16 px-10">
      {/* Heading */}
      <div className="mx-auto text-center max-w-[60%]">
        <h2 className="text-[36px] font-bold text-[var(--text-primary)] mb-4">
          Explore User Experience Courses
        </h2>

        <p className="text-[20px] text-[var(--text-primary)] mb-10">
          Discover a range of UX courses designed to help you understand user
          needs and create better digital experiences.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 flex-wrap justify-center">
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`border font-semibold text-[18px] py-2 px-8 rounded-full transition
            ${
              active === item
                ? "bg-[#EACF00] text-black"
                : "text-[var(--text-primary)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Dynamic Heading */}
      <div className="mt-12 mb-8">
        <h3 className="text-[32px] font-semibold text-(--primary) inria">
          {active.replace("Courses", "")} User Experience Courses
        </h3>
      </div>

      {/* Courses Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white text-[var(--text-primary)] transition duration-300 hover:bg-[#7a7264] hover:text-white group cursor-pointer"
          >
            {/* Icon */}
            <div
              className="w-[55px] h-[55px] flex items-center justify-center rounded-lg mb-4 text-[24px] transition"
              style={{
                backgroundColor: course.iconBg,
                color: course.iconColor,
              }}
            >
              {course.icon}
            </div>

            <h4 className="font-semibold text-[20px] mb-3">{course.title}</h4>

            <p className="text-[16px]  mb-6">{course.desc}</p>

            <button className="flex items-center gap-2 font-medium">
              Explore More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceCourse;