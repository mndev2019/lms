import React from 'react';
import { 
  FaStar, FaBookmark, FaFileAlt, FaWhatsapp, 
  FaUsers, FaRegClock, FaChevronRight, FaDesktop, FaCertificate 
} from "react-icons/fa";

const CourseCards = () => {
  const originalPrice = 1999;
  const discountedPrice = "FREE";
  const discountPercentage = 100;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* --- Top Purchase Section --- */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row bg-white ">
        
        {/* Left Section: Course Preview Branding */}
        <div className="relative w-full md:w-1/2 bg-gradient-to-br from-gray-900 to-indigo-950 p-10 flex flex-col justify-between text-white rounded-l-xl md:rounded-l-none">
          <div className="absolute top-4 right-4">
            <FaBookmark className="w-6 h-6 text-white/50 cursor-pointer hover:text-yellow-400 transition-colors" />
          </div>
          
          <div className="space-y-4">
            <div className="inline-block bg-yellow-400 text-black text-[10px] font-black px-2 py-1 uppercase rounded-sm">
              Premium Course
            </div>
            <h1 className="text-4xl font-black leading-tight">
              Web <br /> Development
            </h1>
            <p className="text-lg opacity-80 font-medium border-l-2 border-yellow-400 pl-3">
              By Aman Dhattarwal
            </p>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/60">
            <div className="flex items-center gap-2">
              <FaDesktop /> Web Access
            </div>
            <div className="flex items-center gap-2">
              <FaCertificate /> Certified
            </div>
          </div>
        </div>

        {/* Right Section: Purchase & Stats */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white">
          <h2 className="text-2xl font-black text-gray-900 mb-2 leading-tight">
            Introduction to Web Development (HTML/CSS)
          </h2>
          
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 mr-3">
              {[...Array(5)].map((_, i) => <FaStar key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-sm text-gray-500 font-bold">5.0 (850 Enrollments)</span>
          </div>

          <div className="space-y-3 mb-8 text-sm border-l-2 border-gray-100 pl-4">
            <p className="text-gray-600"><span className="text-gray-400 font-medium">Instructor:</span> <span className="font-bold">Aman Dhattarwal</span></p>
            <p className="text-gray-600"><span className="text-gray-400 font-medium">Language:</span> <span className="font-bold">English / Hindi</span></p>
            <p className="text-gray-600"><span className="text-gray-400 font-medium">Access:</span> <span className="font-bold text-green-600">Lifetime Web Access</span></p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-gray-400 line-through text-lg font-medium">₹{originalPrice}</span>
              <span className="bg-red-50 text-red-600 text-[10px] font-black px-2 py-1 rounded">
                SAVE {discountPercentage}%
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-gray-900">₹{discountedPrice}</span>
              <span className="text-gray-400 text-[10px] font-bold uppercase">Incl. all taxes</span>
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 px-6 rounded-lg transition-all shadow-lg shadow-indigo-100 active:scale-[0.98] uppercase tracking-widest text-sm">
            Enroll Now
          </button>
        </div>
      </div>

      {/* --- Description & Benefits Section --- */}
      <div className="max-w-5xl mx-auto px-6 py-16 bg-white mt-8">
        <section className="mb-16">
          <h2 className="text-3xl font-black flex items-center gap-4 mb-8 uppercase tracking-tighter">
            <span className="w-2 h-10 bg-[#EACF00] rounded-full"></span>
            Course Curriculum
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-600 mb-10 max-w-3xl">
            Go from absolute zero to a professional frontend foundation. You will master <strong>HTML5</strong> for semantic structure and <strong>CSS3</strong> for modern, responsive layouts. This course focuses on industry-best practices used by developers at top tech companies.
          </p>

          <div className="bg-gray-50 border-l-4 border-[#EACF00] p-8 mb-10 rounded-r-xl">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-lg">
              Course Syllabus
            </h3>
            <p className="text-sm text-gray-500 mb-4">Download the full module-wise breakdown of the 12+ hour program.</p>
            <a href="#" className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-2 group transition-colors">
              View Technical Index 
              <FaChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-3 text-xl font-black text-gray-900">
            <FaRegClock className="text-[#EACF00] text-2xl" />
            <span>Learning Content: <span className="font-medium text-gray-500">12+ Hours of HD Video</span></span>
          </div>
        </section>

        <hr className="border-gray-100 mb-16" />

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4 uppercase tracking-tight">
            <span className="w-2 h-8 bg-[#EACF00] rounded-full"></span>
            LMS Exclusive Benefits:
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            {/* Benefit 1 */}
            <div className="flex items-center gap-6 p-6 rounded-xl border border-gray-100 hover:border-[#EACF00] transition-all bg-gray-50/50 group">
              <div className="bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                <FaFileAlt className="text-2xl text-[#EACF00]" />
              </div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-1">Certification</h4>
                <p className="text-gray-600 text-sm font-medium">Gain an industry-recognized certificate upon 100% completion and passing the exam.</p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-6 p-6 rounded-xl border border-gray-100 hover:border-green-400 transition-all bg-gray-50/50 group">
              <div className="bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                <FaWhatsapp className="text-2xl text-green-500" />
              </div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-1">Support</h4>
                <p className="text-gray-600 text-sm font-medium">24/7 dedicated Support tickets and community access to clear technical roadblocks.</p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-6 p-6 rounded-xl border border-gray-100 hover:border-blue-400 transition-all bg-gray-50/50 group">
              <div className="bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                <FaUsers className="text-2xl text-blue-500" />
              </div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-1">Mentorship</h4>
                <p className="text-gray-600 text-sm font-medium">Monthly Live Q&A and Strategy calls directly with your instructor.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseCards;