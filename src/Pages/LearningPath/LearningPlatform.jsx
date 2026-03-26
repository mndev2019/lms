import React from "react";
import liveclass from "../../assets/Image/liveclass.png";
import calender from "../../assets/Image/calender.png";
import onlinexam from "../../assets/Image/onlineexam.png";
import progress from "../../assets/Image/progress.png";
import medal from "../../assets/Image/medal 1.png";
import assignment from "../../assets/Image/assignment.png";

const features = [
  {
    title: "Live Classes",
    desc: "Join interactive live sessions with instructors and learn in real time through engaging discussions.",
    color: "#BB2E2E",
    icon: liveclass,
  },
  {
    title: "Attendance Tracking",
    desc: "Keep track of your class participation and maintain your attendance records easily.",
    color: "#2E58BB",
    icon: calender,
  },
  {
    title: "Online Exams",
    desc: "Test your knowledge with quizzes and exams designed to evaluate your progress.",
    color: "#EACF00",
    icon: onlinexam,
  },
  {
    title: "Progress Tracking",
    desc: "Monitor your learning journey and see how much of the course you have completed.",
    color: "#35BB2E",
    icon: progress,
  },
  {
    title: "Certification",
    desc: "Earn a certificate after successfully completing your course and showcase your achievement.",
    color: "#BB8C2E",
    icon: medal,
  },
  {
    title: "Assignments",
    desc: "Complete practical assignments that help you apply what you learn and strengthen your skills.",
    color: "#B42EBB",
    icon: assignment,
  },
];

const LearningPlatform = () => {
  return (
    <section className="px-10 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-6">
          <div>
            <h2 className="text-[36px] font-bold text-(--text-primary) mb-4 inria">
              Complete Learning Experience in One Platform
            </h2>

            <p className="max-w-xl text-[18px] text-(--text-primary)">
              Our platform provides all the essential tools to support your
              learning journey. From live classes and assignments to progress
              tracking and certification, everything is designed to make
              learning simple, interactive, and effective.
            </p>
          </div>

          <button className="bg-[#EACF00] px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-yellow-500 transition">
            View All →
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-(--secondary) p-8 relative text-center  shadow-sm hover:shadow-md transition"
            >
              {/* Top Color Line */}
              <div
                className="absolute top-0 left-0 w-full h-2 "
                style={{ backgroundColor: item.color }}
              ></div>

              {/* Icon */}
              <div
                className="p-4 rounded-[17px] border-2 inline-block mb-5"
                style={{ borderColor: item.color }}
              >
                <img src={item.icon} alt={item.title} className="h-[60px]" />
              </div>

              {/* Title */}
              <h3 className="text-[25px] text-(--text-primary) font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-(--text-primary) font-medium text-[18px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningPlatform;