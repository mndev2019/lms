import React from 'react'
import banner from '../../assets/Image/bannernew.png'
import student from '../../assets/Image/student.png'
import course from '../../assets/Image/course.png'
import instructor from '../../assets/Image/instructor.png'
import shape from '../../assets/Image/shape.png'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate("");
    return (
        <>
            <section className='bg-(--secondary)  px-10 '>
                <div className="container">
                    <div className="grid grid-cols-2  items-center gap-10">
                        <div className="col-span-1">
                            <div className="w-full space-y-8">
                                <h2 className='inria text-(--text-primary) font-bold text-[50px]'>
                                    Create, Teach & Grow Your Online Learning Business
                                </h2>
                                <p className='text(--text-primary) text-[18px] tracking-widest noto'>
                                    Launch courses, host live classes, manage students, and track your revenue — all in one powerful learning platform.
                                </p>
                                <div className="flex flex-col gap-6 mt-5">

                                    {/* Buttons */}
                                    <div className="flex items-center gap-4 flex-wrap">
                                        {/* Outline Button */}
                                        <button
                                        onClick={()=> navigate('/login')}
                                            className="px-7 py-2 rounded-full  hover:bg-gray-100 transition font-medium border border-(--text-primary) text-(--text-primary) noto "
                                        >
                                            Start Your Free Trial
                                        </button>

                                        {/* Primary Button */}
                                        <button
                                         onClick={()=> navigate('/login')}
                                            className="px-7 py-2 rounded-full  hover:bg-[#e6c800] transition font-medium bg-(--yellow) text-black noto"
                                        >
                                            Book A Demo
                                        </button>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-10 flex-wrap">

                                        {/* Students */}
                                        <div className="flex items-center gap-3">
                                            <div >
                                                <img src={student} className='h-12.5'/>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-(--text-primary) text-[20px]">10,000+</p>
                                                <p className="text-sm font-normal  text-(--text-primary) text-[18px]">Students</p>
                                            </div>
                                        </div>

                                        {/* Courses */}
                                        <div className="flex items-center gap-3">
                                            <div >
                                               <img src={course} className='h-12.5'/>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-(--text-primary) text-[20px]">150+</p>
                                                <p className="text-sm font-normal  text-(--text-primary) text-[18px]">Courses</p>
                                            </div>
                                        </div>

                                        {/* Instructors */}
                                        <div className="flex items-center gap-3">
                                               <div >
                                               <img src={instructor} className='h-12.5'/>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-(--text-primary) text-[20px]">50+</p>
                                                <p className="text-sm font-normal  text-(--text-primary) text-[18px]">Instructors</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={banner} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-full'>
 <img src={shape} className='w-full' />
                </div>
               
            </section>

        </>
    )
}

export default Banner
