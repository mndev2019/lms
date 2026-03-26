import React from 'react'
import exp1 from '../../assets/Image/exp1.png'
import exp2 from '../../assets/Image/exp2.png'
import exp3 from '../../assets/Image/exp3.png'

const Experience = () => {

    return (
        <>
            <section className='bg-(--primary) px-10 py-15'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <h2 className='inria text-(--text-secondary) font-semibold text-[40px]  w-[60%] mx-auto'>
                                Powerful learning experiences on a platform built for growth
                            </h2>
                            <p className='text-(--text-secondary) text-[20px] w-[60%] mx-auto mt-5 font-light'>
                                Design interactive lessons, manage students, track learning progress, and deliver a powerful learning experience with our all-in-one LMS.
                            </p>


                        </div>
                    </div>
                    <div className="grid grid-cols-3 px-20 mt-10 gap-10">

                        <div className="col-span-1">
                            <div className=" bg-(--secondary) rounded-[2px] overflow-hidden shadow-md ">

                                {/* Top Accent Bar */}
                                <div className="h-3 bg-[#BB2E2E]"></div>

                                {/* Content */}
                                <div className="px-6 py-8 relative">
                                    <h3 className="text-[25px] font-semibold text-(--text-primary) text-left">
                                        Personalize Your <br />
                                        Learning Experience
                                    </h3>

                                    <p className="mt-4 text-[18px] text-(--text-primary) text-left leading-relaxed">
                                        Adapt courses, learning paths, and content to match individual goals and
                                        learning preferences.
                                    </p>
                                    {/* Bottom Red Corners */}
                                    <span className="absolute bottom-0 left-0 w-1 h-7 bg-[#BB2E2E]" />
                                    <span className="absolute bottom-0 right-0 w-1 h-7 bg-[#BB2E2E]" />
                                </div>

                                {/* Image Section */}
                                <div className="relative border-l-3 border-r-3 border-b-3 border-[#BB2E2E] ">
                                    <img
                                        src={exp1}
                                        alt="Learning"
                                        className="w-full h-[200px] object-cover"
                                    />


                                </div>
                            </div>
                        </div>
                          <div className="col-span-1">
                            <div className=" bg-(--secondary) rounded-[2px] overflow-hidden shadow-md ">

                                {/* Top Accent Bar */}
                                <div className="h-3 bg-[#2E58BB]"></div>

                                {/* Content */}
                                <div className="px-6 py-8 relative">
                                    <h3 className="text-[25px] font-semibold text-(--text-primary) text-left">
                                       Tailored Learning <br />
                                       Journey
                                    </h3>

                                    <p className="mt-4 text-[18px] text-(--text-primary) text-left leading-relaxed">
                                       Create flexible learning paths and customize course content to fit every learner’s needs.
                                    </p>
                                    {/* Bottom Red Corners */}
                                    <span className="absolute bottom-0 left-0 w-1 h-7 bg-[#2E58BB]" />
                                    <span className="absolute bottom-0 right-0 w-1 h-7 bg-[#2E58BB]" />
                                </div>

                                {/* Image Section */}
                                <div className="relative border-l-3 border-r-3 border-b-3 border-[#2E58BB] ">
                                    <img
                                        src={exp2}
                                        alt="Learning"
                                        className="w-full h-[200px] object-cover"
                                    />


                                </div>
                            </div>
                        </div>
                          <div className="col-span-1">
                            <div className=" bg-(--secondary) rounded-[2px] overflow-hidden shadow-md ">

                                {/* Top Accent Bar */}
                                <div className="h-3 bg-[#EACF00]"></div>

                                {/* Content */}
                                <div className="px-6 py-8 relative">
                                    <h3 className="text-[25px] font-semibold text-(--text-primary) text-left">
                                       Flexible Learning <br />
                                        Options
                                    </h3>

                                    <p className="mt-4 text-[18px] text-(--text-primary) text-left leading-relaxed">
                                        Adjust course formats, schedules, and resources to build a learning experience that works best for you.
                                    </p>
                                    {/* Bottom Red Corners */}
                                    <span className="absolute bottom-0 left-0 w-1 h-7 bg-[#EACF00]" />
                                    <span className="absolute bottom-0 right-0 w-1 h-7 bg-[#EACF00]" />
                                </div>

                                {/* Image Section */}
                                <div className="relative border-l-3 border-r-3 border-b-3 border-[#EACF00] ">
                                    <img
                                        src={exp3}
                                        alt="Learning"
                                        className="w-full h-[200px] object-cover"
                                    />


                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience
