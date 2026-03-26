import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply create an account, choose your course, and complete the enrollment process to start learning.",
  },
  {
    question: "Can I access courses anytime?",
    answer:
      "Yes, courses are available online so you can learn anytime and from anywhere.",
  },
  {
    question: "Are there live classes available?",
    answer:
      "Yes, we offer live classes along with recorded sessions for flexible learning.",
  },
  {
    question: "How can I track my learning progress?",
    answer:
      "You can track progress through your dashboard with detailed course insights.",
  },
  {
    question: "Is the platform mobile-friendly?",
    answer:
      "Absolutely! Our platform works seamlessly across all devices.",
  },
  {
    question: "What is an LMS platform?",
    answer:
      "An LMS (Learning Management System) helps manage, deliver, and track learning experiences.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState();

  return (
    <section className="px-30 py-20">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="inria text-[var(--text-primary)] font-semibold text-[40px]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-[#F2EFE6]
                  border-2 border-dashed border-(--text-primary) rounded-xl
                  px-6 py-5
                  transition-all
                "
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-[16px] font-medium text-(--text-primary)">
                    {item.question}
                  </span>

                  <span className="w-7 h-7 rounded-full bg-[#0f2a44] text-white flex items-center justify-center">
                    {isOpen ? <FiX /> : <FiPlus />}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="mt-4 text-[14px] text-(--text-primary) leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;