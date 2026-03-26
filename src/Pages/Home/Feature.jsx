import React from 'react'
import feature from '../../assets/Image/feature.png'
import tick from '../../assets/Image/tick.png'
import { useNavigate } from 'react-router-dom'

const Feature = () => {
    const navigate = useNavigate("");
    return (
        <>
            <section className='bg-white px-10 '>
                <div className="container">
                    <div className="grid grid-cols-2 items-center">
                        <div className="col-span-1 ">
                            <div className="w-full space-y-8">
                                <h2 className='inria text-(--text-primary) font-bold text-[50px]'>
                                    Smart AI Learning  <br /> Assistant
                                </h2>
                                <p className='text-(--text-primary) text-[18px] tracking-wider  '>
                                    Create a powerful AI system trained on your course content to support teaching, engagement, and student assistance across your platform.
                                </p>
                                <div className='flex gap-4'>
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


                                <div className="flex items-start">
                                    <div className=''>
                                        <img src={tick} className='h-[30px] w-full' />
                                    </div>
                                    <p className="text-(--text-primary) font-regular text-[18px] ">
                                        AI assistants that answer student questions and guide learning.
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-start gap-3">
                                    <div>
                                        <img src={tick} className='h-[30px]' />
                                    </div>
                                    <p className="text-(--text-primary) font-regular text-[18px] ">
                                        Smart replies based on your course content and teaching style.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <img src={tick} className='h-[30px]' />
                                    </div>
                                    <p className="text-(--text-primary) font-regular text-[18px] ">
                                        Automate support and keep learners engaged.
                                    </p>
                                </div>


                            </div>
                        </div>
                        <div className="col-span-1">
                            <img src={feature} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
