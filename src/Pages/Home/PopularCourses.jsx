import React from 'react'
import web from '../../assets/Image/web.png'
import datascience from '../../assets/Image/datascience.png'
import dm from '../../assets/Image/dm.png'
import uiux from '../../assets/Image/uiux.png'
import graphic from '../../assets/Image/graphic.png'
import app from '../../assets/Image/app.png'
import cyber from '../../assets/Image/cyber.png'
import machine from '../../assets/Image/machine.png'

const PopularCourses = () => {
    const data = [
        {
            title: "Web Development",
            image: web,
        },
        {
            title: "Data Science",
            image: datascience,
        },
        {
            title: "Digital Marketing",
            image: dm,
        },
        {
            title: "UX/UI",
            image: uiux,
        },
        {
            title: "Graphic Design",
            image: graphic,
        },
        {
            title: "App Development",
            image: app,
        },
        {
            title: "Cyber Security",
            image: cyber,
        },
        {
            title: "Machine",
            image: machine,
        },
    ]
    return (
        <>
            <section className='bg-(--secondary) px-10 py-10'>
                <div className="container">
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="inria text-[var(--text-primary)] font-semibold text-[40px]">
                            Popular Courses
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 gap-6 px-6">
                        {data.map((itm, index) => (
                            <div key={index} className="flex gap-3 items-center">
                                <div className="h-[70px] w-[70px] rounded-full border-2 border-(--primary) flex items-center justify-center">
                                    <img src={itm.image} className="h-[50px]" />
                                </div>

                                <p className="text-(--primary) text-[25px] font-semibold">
                                    {itm.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularCourses
