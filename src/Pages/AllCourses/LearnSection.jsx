import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import userlist from '../../assets/Image/userlist.png'
import user from '../../assets/Image/user.png'

const LearnSection = () => {
    return (
        <section className="bg-(--secondary) py-16 px-10">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-[36px] font-bold text-(--text-primary) mb-4 inria">
                    What you’ll learn
                </h2>

                <p className="max-w-xl text-[20px] text-(--text-primary) mb-10">
                    By the end of this course, you’ll gain practical skills and knowledge
                    to apply in real-world projects. You’ll master key concepts, tools,
                    and techniques, build hands-on experience, and improve your
                    confidence to tackle challenges in your field.
                </p>

                <div className="grid grid-cols-3 gap-10 items-start">

                    {/* Testimonial 1 */}
                    <div>
                        <img
                            src={user}
                            className="w-[60px] h-[60px] rounded-lg object-cover mb-2"
                        />

                        <h4 className="font-semibold text-(--text-primary)">John Doe</h4>

                        <p className="text-[15px] mt-2 text-(--text-primary)">
                            Absolutely loved this course! The projects were very practical
                            and the instructor explained everything clearly.
                        </p>

                        <p className="text-[15px] mt-2 text-(--text-primary)">
                            — John Doe, Software Developer
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div>
                        <img
                            src={user}
                            className="w-[60px] h-[60px] rounded-lg object-cover mb-2"
                        />

                        <h4 className="font-semibold text-(--text-primary)">Alice Smith</h4>

                        <p className="text-[15px] mt-2 text-(--text-primary)">
                            This course helped me land my first job in web development.
                            Highly recommended!
                        </p>

                        <p className="text-[15px] mt-2 text-(--text-primary)">
                            — Alice Smith, Frontend Developer
                        </p>
                    </div>

                    {/* Students Completed */}
                    <div className="flex flex-col justify-center">

                        <h3 className="text-[40px] font-bold text-(--text-primary)">
                            100+
                        </h3>

                        <p className="text-[18px] text-(--text-primary) mb-4 font-medium">
                            students completed course
                        </p>
                        <img src={userlist} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LearnSection;