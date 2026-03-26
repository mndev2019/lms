import React from 'react'
import library from '../../assets/Image/library.png'
import sale from '../../assets/Image/sale.png'
import email from '../../assets/Image/email.png'
import platform2 from '../../assets/Image/platform2.png'
import { FiArrowUpRight } from 'react-icons/fi'
import account from '../../assets/Image/account.png'
import platform from '../../assets/Image/platform1.png'
import shape from '../../assets/Image/darkshape.png'

const Platform = () => {
    return (
        <>
            <section className='bg-(--primary) px-30 py-10'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 ">
                            <h2 className='inria text-(--text-secondary) font-semibold text-[40px] '>
                                Easy Platform Migration
                            </h2>
                            <p className='text-(--text-secondary) text-[20px] w-[60%]  mt-5 font-light'>
                                Design interactive lessons, manage students, track learning progress, and deliver a powerful learning experience with our all-in-one LMS.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-3 mt-10">
                        <div className="col-span-4">
                            <div className='bg-(--secondary) border-t-15 border-[#BB2E2E] col-span-1 rounded-[2px]  '>
                                <div className='p-4 space-y-3'>
                                    <img src={account} className='h-[50px]' />
                                    <h2 className='text-(--text-primary) font-medium text-[25px]'>
                                        Learner Accounts
                                    </h2>
                                    <p className='text-(--text-primary) text-[18px]'>
                                        All student and member profiles transferred safely.
                                    </p>
                                    <button
                                        className=" flex items-center gap-2  text-[20px]   font-medium  underline text-black   hover:gap-3   transition-all  "
                                    >
                                        Switch to Our Platform
                                        <FiArrowUpRight
                                            className="text-[18px]" />
                                    </button>
                                </div>

                                <img src={platform} className='pl-8 pb-4' />
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="grid grid-cols-2 gap-3">
                                <div className='bg-(--secondary) border-t-15 border-[#2E58BB] col-span-1 rounded-[2px] pt-4 pr-4 pl-4 pb-10 space-y-3'>
                                    <img src={library} className='h-[50px]' />
                                    <h2 className='text-(--text-primary) font-medium text-[25px]'>
                                        Course Library
                                    </h2>
                                    <p className='text-(--text-primary) text-[18px]'>
                                        Videos, PDFs, and course modules moved easily.
                                    </p>
                                    <button
                                        className=" flex items-center gap-2  text-[20px]   font-medium  underline text-black   hover:gap-3   transition-all  "
                                    >
                                        Switch to Our Platform
                                        <FiArrowUpRight
                                            className="text-[18px]" />
                                    </button>
                                </div>
                                <div className='bg-(--secondary) border-t-15 border-[#EACF00] col-span-1 rounded-[2px] pt-4 pr-4 pl-4 pb-10 space-y-3'>
                                    <img src={sale} className='h-[50px]' />
                                    <h2 className='text-(--text-primary) font-medium text-[25px]'>
                                        Sales & Checkout
                                    </h2>
                                    <p className='text-(--text-primary) text-[18px]'>
                                        Sales pages and payment flows recreated.
                                    </p>
                                    <button
                                        className=" flex items-center gap-2  text-[20px]   font-medium  underline text-black   hover:gap-3   transition-all  "
                                    >
                                        Switch to Our Platform
                                        <FiArrowUpRight
                                            className="text-[18px]" />
                                    </button>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 mt-5">
                                <div className='bg-(--secondary) border-t-15 border-[#F2EFE6] col-span-1 rounded-[2px] space-y-3'>
                                    <img src={platform2} />

                                </div>
                                <div className='bg-(--secondary) border-t-15 border-[#35BB2E] col-span-1 rounded-[2px] pt-4 pr-4 pl-4 pb-10 space-y-3'>
                                    <img src={email} className='h-[50px]' />
                                    <h2 className='text-(--text-primary) font-medium text-[25px]'>
                                        Email Contacts
                                    </h2>
                                    <p className='text-(--text-primary) text-[18px]'>
                                        Email lists, tags, and segments migrated.
                                    </p>
                                    <button
                                        className=" flex items-center gap-2  text-[20px]   font-medium  underline text-black   hover:gap-3   transition-all  "
                                    >
                                        Switch to Our Platform
                                        <FiArrowUpRight
                                            className="text-[18px]" />
                                    </button>
                                </div>

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

export default Platform
