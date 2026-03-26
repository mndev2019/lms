import React from 'react'
import user from '../../assets/Image/user.png'
import { FaStar } from 'react-icons/fa'

const Testimonial = () => {
    return (
        <>
            <section className='px-30 py-15 bg-(--primary)'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-5">
                        {[1, 2, 3].map(() => (
                            <>
                                <div className="col-span-1">
                                    <div className="w-full border border-[#93908B] p-8 rounded-[12px]">
                                        {/* Rating */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex text-[#FCCC18]">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <span className="text-[#FCCC18] font-semibold">5.0</span>
                                        </div>
                                        <h2 className='font-semibold text-[20px] text-(--secondary) mb-2'>
                                            Best Lms Agency!
                                        </h2>
                                        <p className='text-[18px] text-(--secondary) font-light'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <div className='flex items-center gap-5 mt-8'>
                                            <div className="icon">
                                                <img src={user} className='h-[50px]' />
                                            </div>
                                            <div className="text">
                                                <h2 className='text-(--secondary) font-semibold'>
                                                    Triffany
                                                </h2>
                                                <p className='text-(--secondary) font-light'>
                                                    from Canada
                                                </p>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))

                        }

                    </div>
                </div>
            </section>
        </>
    )

}

export default Testimonial
