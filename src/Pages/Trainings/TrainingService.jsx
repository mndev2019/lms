import React from "react";
import { TiMediaRecord } from "react-icons/ti";
import inperson from '../../assets/Image/inpersontraining.png'
import online from '../../assets/Image/onlinetraining.png'
import bootcamp from '../../assets/Image/bootcamp.png'

const TrainingService = () => {
    const services = [
        {
            title: "In-Person Training & Workshops",
            text: "Hands-on sessions to build practical skills.",
            image:inperson,
        },
        {
            title: "Online Training & Courses",
            text: "Flexible learning anytime, anywhere.",
            image:online,

        },
        {
            title: "Bootcamp Programs",
            text: "Fast-track training to develop key skills quickly.",
            image:bootcamp,
        },
    ];

    return (
        <div className="bg-(--primary) py-16  text-white">

            <div className="max-w-6xl mx-auto px-6">

                <span className="bg-[#726E65] shadow px-10 py-3 rounded-[25px] text-[20px] font-semibold flex items-center gap-3 w-fit mx-auto">
                    <TiMediaRecord className="text-[#EACF00]" />
                    Our Services
                    <TiMediaRecord className="text-[#EACF00]" />
                </span>


                <div className="col-span-1 text-center my-5">
                    <h2 className='inria text-(--text-secondary) font-semibold text-[40px]'>
                        Explore Learning with Top Corporate Training
                    </h2>
                    <p className='text-(--text-secondary) text-[20px] w-[60%] mx-auto  font-light'>
                        Explore expert-led corporate training designed to build skills, boost performance, and support team growth.
                    </p>
                </div>


                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white  p-5 rounded-[8px] shadow flex items-center gap-4"
                        >
                            <div className="icon">
                               <img src={item.image} />
                            </div>
                            <div className="text">
                                <h3 className="font-semibold text-[18px] text-(--text-primary)">{item.title}</h3>
                                <p className="text-[16px] text-[#646464] mt-2">{item.text}</p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default TrainingService;