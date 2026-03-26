import React from 'react'
import person from '../../assets/Image/man.png'

const TrustPlatform = () => {
    return (
        <>
            <section className=' px-10 py-15'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <h2 className='inria text-(--primary) font-semibold text-[40px]  w-[60%] mx-auto'>
                                Why Learners Trust Our Platform
                            </h2>
                            <p className='text-(--primary) text-[20px] w-[60%] mx-auto mt-5 font-light'>
                                Our learning platform is built to provide practical knowledge, expert guidance, and real-world skills.
                            </p>
                        </div>
                    </div>

                    <div className=" mx-auto px-4 grid lg:grid-cols-3 gap-8 items-stretch mt-4">

                        {/* Left Column */}
                        <div className="flex flex-col gap-8">
                            <div className="bg-(--secondary) p-8 rounded-[20px]">
                                <h3 className="text-xl font-semibold mb-3">
                                    Recognized Certifications
                                </h3>
                                <p className="text-(--primary) text-[18px] leading-relaxed">
                                    Our programs follow industry standards and are designed to help
                                    learners gain credible certifications that add value to their
                                    professional journey.
                                </p>
                            </div>

                            <div className="bg-(--secondary) p-8 rounded-[20px]">
                                <h3 className="text-xl font-semibold mb-3">
                                    Expert Mentorship
                                </h3>
                                <p className="text-(--primary) text-[18px] leading-relaxed">
                                    Get guidance from experienced instructors who support your
                                    learning journey and help you build confidence, skills, and
                                    career readiness.
                                </p>
                            </div>
                        </div>

                        {/* Center Column */}
                        <div className="bg-(--primary) rounded-[20px] text-(--secondary) flex flex-col justify-between items-center pt-8 pr-8 pl-8 relative">
                            <div>
                                <h3 className="text-xl font-semibold mb-3">
                                    Multi-Language Assistance
                                </h3>
                                <p className="text-(--secondary) text-[18px] leading-relaxed">
                                    We provide support in multiple languages so learners from diverse
                                    backgrounds can learn comfortably and effectively.
                                </p>
                            </div>

                            <img
                                src={person}
                                alt="mentor"
                                className=" h-[260px] object-contain"
                            />
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-8">
                            <div className="bg-(--secondary) p-8 rounded-[20px]">
                                <h3 className="text-xl font-semibold mb-3 ">
                                    Global Learning Community
                                </h3>
                                <p className="text-(--primary) text-[18px] leading-relaxed">
                                    Connect with students, mentors, and professionals from different
                                    parts of the world and expand your knowledge through
                                    collaboration.
                                </p>
                            </div>

                            <div className="bg-(--secondary) p-8 rounded-[20px]">
                                <h3 className="text-xl font-semibold mb-3">
                                    Career-Focused Learning
                                </h3>
                                <p className="text-(--primary) text-[18px] leading-relaxed">
                                    Our courses combine theory with practical experience, helping you
                                    develop skills that are relevant for today's job market.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default TrustPlatform
