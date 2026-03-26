import React from 'react'
import shape1 from '../../assets/Image/firstshape.png'
import shape2 from '../../assets/Image/secondshape.png'
import calender from '../../assets/Image/darkcalender.png'
import { useNavigate } from 'react-router-dom'

const CalenderSection = () => {
    const navigate = useNavigate("");
    return (
        <>
            <section className='px-30 py-15'>
                <div className="container">
                    <div className='bg-(--primary) rounded-[37px] '>
                        <div className='max-w-3xl mx-auto py-15 relative'>
                            <img src={shape1} className='absolute top-0 left-[-254px]' />
                            <img src={shape2} className='absolute bottom-0 right-[-254px]' />
                            <img src={calender} className='absolute top-0 right-[-209px] h-[100px]' />
                            <img src={calender} className='absolute bottom-0 left-[-209px] h-[100px]' />
                            <h2 className="text-[40px] font-semibold text-(--text-secondary) mb-4 text-center inria">
                                Stay Organized with Smart Learning Calendar
                            </h2>

                            <p className="text-(--text-secondary) text-md mb-8 text-center">
                                Our learning platform is built to provide practical knowledge,
                                Manage your learning schedule with an integrated calendar. Easily track upcoming classes, meetings, assignments, and exams in one place. Get reminders for important events and never miss a session while keeping your learning journey well organized.
                            </p>
                            {/* Buttons */}
                            <div className="flex items-center gap-4 flex-wrap justify-center">
                                {/* Outline Button */}
                                {/* <button
                                    className="px-7 py-2 rounded-full  hover:bg-gray-100 transition font-medium border border-(--text-secondary) text-(--text-secondary) noto "
                                >
                                    Check Upcoming Events
                                </button> */}

                                {/* Primary Button */}
                                <button
                                    onClick={() => navigate('/web-calender')}
                                    className="px-7 py-2 rounded-full  hover:bg-[#e6c800] transition font-medium bg-(--yellow) text-black noto"
                                >
                                    Explore Calendar
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default CalenderSection
