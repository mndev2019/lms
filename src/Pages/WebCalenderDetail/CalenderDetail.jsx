import React from 'react'
import img1 from '../../assets/Image/calender1.jpg'
import img2 from '../../assets/Image/calender2.jpg'

const CalenderDetail = () => {
    const shadowStyle = {
        boxShadow: "20px 20px 4px 0px #00000040",
    };
    return (
        <>
            <section className='bg-white py-15'>
                <div className='text-center max-w-[60%] mx-auto'>
                    {/* top badge */}
                    <span className="bg-[#EACF00] text-black px-8 py-1 rounded-full text-[18px] font-semibold">
                        How it works
                    </span>

                    {/* heading */}
                    <h2 className="text-4xl inria font-bold text-[50px] text-(--text-primary) mt-6 leading-snug">
                        My Calendar
                    </h2>
                    <p className='text-[18px] text-(--primary) mt-6'>
                        Keep all your schedules organized in one place and avoid confusion while planning your day. Manage meetings, tasks, and events with confidence using a simple calendar system.
                    </p>
                </div>

                <div className="px-20 mx-auto space-y-20 my-10 ">

                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div className="space-y-8">

                            <div className="flex gap-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E9F5FF] border border-[#CFDDFF]  text-[#004CFF] font-semibold">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-bold text-(--text-primary)">
                                        Calendar Sync
                                    </h3>
                                    <p className="text-(--primary) text-[16px] mt-1">
                                        Connect multiple calendars in one place to keep all schedules
                                        updated and organized.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E9F5FF] border border-[#CFDDFF]  text-[#004CFF] font-semibold">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-bold text-(--text-primary)">
                                        Easy Event Management
                                    </h3>
                                    <p className="text-(--primary) text-[16px] mt-1">
                                        Quickly create, edit, or remove events without switching
                                        between different platforms.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E9F5FF] border border-[#CFDDFF]  text-[#004CFF] font-semibold">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-bold text-(--text-primary)">
                                        Stay on Schedule
                                    </h3>
                                    <p className="text-(--primary) text-[16px] mt-1">
                                        Track meetings, classes, and important deadlines with a clear
                                        and simple calendar view.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Right Image */}
                        <div className="rounded-xl overflow-hidden" style={shadowStyle}>
                            <img
                                src={img1}
                                alt="calendar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Image */}
                        <div className="rounded-xl overflow-hidden" style={shadowStyle}>
                            <img
                                src={img2}
                                alt="calendar"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="space-y-8">

                            <div className="flex gap-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E9F5FF] border border-[#CFDDFF]  text-[#004CFF] font-semibold">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Set Your Available Time
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Choose the time slots when you are free so others can easily
                                        book meetings or sessions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E9F5FF] border border-[#CFDDFF]  text-[#004CFF] font-semibold">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Quick Time Sharing
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Share your availability with a simple link so people can
                                        schedule without back-and-forth messages.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E9F5FF] border border-[#CFDDFF]  text-[#004CFF] font-semibold">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Avoid Schedule Conflicts
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Automatic updates help prevent double bookings and keep your
                                        calendar organized.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default CalenderDetail
