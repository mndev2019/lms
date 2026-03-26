import React from 'react'
import comingup1 from '../../assets/Image/comingup.png'
import { FiCalendar, FiClock } from 'react-icons/fi'


const ComingUp = () => {
    return (
        <>
            <section className=' px-10 py-10'>
                <div className="container">
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="inria text-(--text-primary) font-semibold text-[40px]">
                            What’s Coming Up
                        </h2>
                        <p className='text-(--primary) text-[20px] w-[60%] mx-auto mt-5 font-light'>
                            Stay updated with our upcoming events, workshops, and learning sessions designed to help you grow your skills.
                        </p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <img src={comingup1} />

                        </div>
                        <div className="col-span-1">
                            <div className='bg-(--secondary) p-5 rounded-md  '>

                                <h2 className='font-bold text-[22px] text-(--text-primary) mb-2'>
                                    Web Development Workshop
                                </h2>

                                <p className='text-[16px] text-(--text-primary) mb-4'>
                                    Learn how to build modern websites and understand the fundamentals of web development in this interactive session.
                                </p>

                                {/* Time & Date */}
                                <div className='flex items-center gap-6 text-[16px] justify-end'>

                                    <div className='flex items-center gap-2 text-[#35BB2E]'>
                                        <FiClock size={18} />
                                        <span className='text-(--text-primary) font-bold '>1:00 PM – 6:30 PM</span>
                                    </div>

                                    <div className='flex items-center gap-2 text-[#FBA93E]'>
                                        <FiCalendar size={18} />
                                        <span className='text-(--text-primary) font-bold '>September 30, 2026</span>
                                    </div>

                                </div>

                            </div>
                             <div className='bg-(--primary) p-5 rounded-md  mt-5'>

                                <h2 className='font-bold text-[22px] text-(--text-secondary) mb-2'>
                                    Industry Expert Session
                                </h2>

                                <p className='text-[16px] text-(--text-secondary) mb-4'>
                                  Gain valuable insights and practical knowledge from professionals working in the tech industry.
                                </p>

                                {/* Time & Date */}
                                <div className='flex items-center gap-6 text-[16px] justify-end'>

                                    <div className='flex items-center gap-2 text-[#35BB2E]'>
                                        <FiClock size={18} />
                                        <span className='text-(--text-secondary) font-bold '>1:00 PM – 6:30 PM</span>
                                    </div>

                                    <div className='flex items-center gap-2 text-[#FBA93E]'>
                                        <FiCalendar size={18} />
                                        <span className='text-(--text-secondary) font-bold '>September 30, 2026</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ComingUp
