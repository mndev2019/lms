import React from 'react'
// import banner from '../assets/Image/bannernew.png'

import shape from '../assets/Image/shape.png'
import { useNavigate } from 'react-router-dom'

const InnerBanner = (props) => {
    const navigate = useNavigate("");
    return (
        <>
            <section className='bg-(--secondary)  px-10 '>
                <div className="container">
                    <div className="grid grid-cols-2  items-center gap-10">
                        <div className="col-span-1">
                            <div className="w-full space-y-8">
                                <h2 className='inria text-(--text-primary) font-bold text-[50px]'>
                                    {props.title}
                                </h2>
                                <p className='text(--text-primary) text-[18px] tracking-widest noto'>
                                   {props.subtitle}
                                </p>
                               

                                    {/* Buttons */}
                                    <div className="">
                                       
                                        <button
                                        onClick={()=> navigate('/login')}
                                            className="px-7 py-2 rounded-full  hover:bg-[#e6c800] transition font-medium bg-(--yellow) text-black noto"
                                        >
                                          {props.btn}
                                        </button>
                                    </div>

                                  
                          

                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={props.image} />
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

export default InnerBanner
