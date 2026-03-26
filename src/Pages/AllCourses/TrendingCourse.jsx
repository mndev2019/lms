import React from 'react'
import datascience from '../../assets/Image/datasciencered.png'
import { FiArrowUpRight } from 'react-icons/fi'
import shape from '../../assets/Image/redhalfcircle.png'
import web from '../../assets/Image/webdev.png'
import shapeyellow from '../../assets/Image/yellowhalfcircle.png'

const TrendingCourse = () => {
    return (
        <>
            <section className='bg-(--primary) px-10 py-15'>
                <div className="container">
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="inria text-(--text-secondary) font-semibold text-[40px]">
                            Discover The Trending Courses That Match Your Goals
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 px-30 gap-10">
                        <div className="col-span-1 bg-white p-7 border-b-15 border-[#BB2E2E] relative">
                            <img src={shape} className='absolute right-0 top-0'/>
                            <img src={datascience} className='h-[60px]' />
                            <h2 className='font-semibold text-[25px] my-4'>
                                Data science
                            </h2>
                            <p className=' text-[15px]'>
                                Build a strong foundation in data analysis, insights, and visualization to solve real-world problems
                            </p>
                            <button
                                className=" flex items-center gap-2  text-[20px]   font-medium  underline text-black   hover:gap-3   transition-all mt-3 "
                            >
                                Start Learning
                                <FiArrowUpRight
                                    className="text-[18px]" />
                            </button>
                        </div>
                           <div className="col-span-1 bg-white p-7 border-b-15 border-[#EACF00] relative">
                            <img src={shapeyellow} className='absolute right-0 top-0'/>
                            <img src={web} className='h-[60px]' />
                            <h2 className='font-semibold text-[25px] my-4'>
                                Web Development
                            </h2>
                            <p className=' text-[15px]'>
                               Learn to create modern, responsive websites and applications using full-stack technologies
                            </p>
                            <button
                                className=" flex items-center gap-2  text-[20px]   font-medium  underline text-black   hover:gap-3   transition-all mt-3 "
                            >
                                Start Learning
                                <FiArrowUpRight
                                    className="text-[18px]" />
                            </button>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default TrendingCourse
