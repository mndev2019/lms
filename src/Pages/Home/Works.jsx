import React from "react";
import step1 from "../../assets/Image/step1.png";
import step2 from "../../assets/Image/step2.png";
import step3 from "../../assets/Image/step3.png";

const Works = () => {
    return (
        <section className="bg-[#f3f1ec] py-16 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className='inria text-(--text-primary) font-semibold text-[40px]  w-[60%] mx-auto'>
                   How It Works
                </h2>
                <p className='text-(--text-primary) text-[20px] w-[60%] mx-auto mt-5 font-light'>
                  A simple step-by-step journey from joining a course to earning your certificate.
                </p>

                {/* Timeline */}
                <div className="relative mt-16">

                    {/* Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#B7B1A6]"></div>

                    <div className="grid grid-cols-3 items-center relative">

                        {/* Step 1 */}
                        <div className="text-left">
                            <h3 className="font-semibold text-(--text-primary)">
                                Create Your Account <span className="text-4xl text-gray-400">1</span>
                            </h3>
                            <p className="text-(--primary) text-sm mt-2">
                                Sign up and get access your learning dashboard.
                            </p>

                            <div className="mt-6 flex justify-start">
                                <img src={step2} alt="step1" className="w-28" />
                            </div>

                            {/* Dot */}
                            <div className="absolute left-[16%] top-1/2 -translate-y-1/2 w-6 h-6 bg-[#BB2E2E] border-4 border-white rounded-full shadow-md"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <img src={step1} alt="step2" className="w-28 mx-auto mb-6" />

                            <h3 className="font-semibold text-(--text-primary)">
                                Start Learning <span className="text-4xl text-gray-400">2</span>
                            </h3>

                            <p className="text-(--primary) text-sm mt-2">
                                Watch lessons and complete course activities.
                            </p>

                            {/* Dot */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#2E58BB] border-4 border-white rounded-full shadow-md"></div>
                        </div>

                        {/* Step 3 */}
                        <div className="text-right">
                            <h3 className="font-semibold text-(--text-primary)">
                                Earn Your Certificate <span className="text-4xl text-gray-400">3</span>
                            </h3>

                            <p className="text-(--primary) text-sm mt-2">
                                Finish the course and receive your certificate
                            </p>

                            <div className="mt-6 flex justify-end">
                                <img src={step3} alt="step3" className="w-28" />
                            </div>

                            {/* Dot */}
                            <div className="absolute right-[16%] top-1/2 -translate-y-1/2 w-6 h-6 bg-[#EACF00] border-4 border-white rounded-full shadow-md"></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Works;