import React from 'react'
import about from '../../assets/Image/about.png'
import tick from '../../assets/Image/tick.png'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate("");
    return (
        <>
            <section className='bg-white px-10'>
                <div className="container">
                    <div className="grid grid-cols-2 items-center">
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={about} />
                            </div>
                        </div>
                        <div className="col-span-1 space-y-10">
                            <div className="w-full">
                                <h2 className='inria text-(--text-primary) font-bold text-[50px]'>
                                    Need advanced <br /> solutions?
                                </h2>
                                <p className='text-(--text-primary) text-[18px] tracking-wider  '>
                                    Our all-in-one LMS helps educators, creators, and businesses build, manage, and scale their online learning ecosystem with powerful tools.
                                </p>
                                <button
                                 onClick={()=> navigate('/login')}
                                    className="px-7 py-2 rounded-full  hover:bg-[#e6c800] transition font-semibold bg-(--yellow) text-black noto mt-5"
                                >
                                    Book A Demo
                                </button>
                                <div className='flex gap-5 mt-5'>
                                    <div className="flex items-start gap-3">
                                        <div className=''>
                                            <img src={tick} className='h-[30px] w-full' />
                                        </div>
                                        <p className="text-(--text-primary) font-regular text-[18px] ">
                                            Flexible pricing based on
                                            your scale and needs
                                        </p>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-start gap-3">
                                        <div>
                                            <img src={tick} className='h-[30px]' />
                                        </div>
                                        <p className="text-(--text-primary) font-regular text-[18px] ">
                                            Full onboarding and
                                            smooth migration support
                                        </p>
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

export default About
