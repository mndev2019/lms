import React from 'react'
import exp3 from '../../assets/Image/exp3.png'
import { FaCheckCircle } from "react-icons/fa";

const CalenderBanner = () => {
    return (
        <>
            <section className='bg-[var(--primary)] py-16 px-20'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 items-center gap-10">
  {/* RIGHT CONTENT */}
                        <div className="col-span-7 text-(--text-secondary)">
                            <h2 className='text-5xl font-bold inria leading-tight mb-5 '>
                               Manage Your Schedule with Smart Calendar
                            </h2>

                            <p className='text-[22px]  mb-6'>
                               Stay organized with a smart calendar that keeps track of your classes, meetings, and important deadlines. Plan your schedule easily and never miss a session or event.
                            </p>

                            <ul className='space-y-4 text-[22px] font-normal'>
                                <li className='flex items-center gap-3'>
                                    <FaCheckCircle className="text-white text-[20px]" />
                                  Track Classes & Events
                                </li>

                                <li className='flex items-center gap-3'>
                                    <FaCheckCircle className="text-white text-[20px]" />
                                   Manage Your Schedule
                                </li>

                                <li className='flex items-center gap-3'>
                                    <FaCheckCircle className="text-white text-[20px]" />
                                   Stay Updated
                                </li>
                            </ul>
                        </div>
                        {/* LEFT CARD */}
                        <div className="col-span-5">
                            <div className='bg-[#F3F1EC] rounded-[37px] p-6 '>

                                <img
                                    src={exp3}
                                    className='rounded-[21px] w-full h-[220px] object-cover'
                                    alt=""
                                />

                                <p className='mt-4 text-(--text-primary) font-bold text-[24px] inria'>
                                    Never Miss a Class or Deadline
                                </p>

                                <div className="flex items-center gap-2 mt-1">
                                   

                                    <span className='text-[35px] font-bold text-(--text-primary) inria'>
                                        Free
                                    </span>

                                    <span className='text-(--text-primary) inria text-sm'>
                                        for 7 days
                                    </span>
                                </div>
                                <div className='flex justify-end'>
                                    <button className='mt-5 border border-(--text-primary) rounded-full px-6 py-2 text-[18px]  font-semibold hover:bg-black hover:text-white transition'>
                                        Start Your Free Trial
                                    </button>
                                </div>


                            </div>
                        </div>

                      

                    </div>
                </div>
            </section>
        </>
    )
}

export default CalenderBanner