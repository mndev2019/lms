import React, { useState } from "react";
import signupImg from "../assets/Image/signup.png"; // your image
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate("");
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">

            <div className="grid md:grid-cols-2 max-w-6xl w-full overflow-hidden">
                {/* Right Form */}
                <div className="flex flex-col justify-center px-10 py-8">

                    {/* Logo */}
                    <h2 className="text-2xl font-bold mb-6">LOGO</h2>

                    <h3 className="text-[30px] font-semibold text-(--text-primary)">
                        Launch and grow your online learning business with AI
                    </h3>

                    <p className="text-(--text-primary) text-[18px] mt-4 mb-10">
                        Build, manage, and expand your digital courses on a smart platform
                        designed for creators and educators.
                    </p>

                    {/* Form */}
                    <form className="space-y-4 ">



                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-(--primary) rounded-md px-4 py-2 outline-none focus:border-blue-500 "
                        />



                        {/* Password */}
                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full border border-(--primary) rounded-md px-4 py-2 pr-10 outline-none focus:border-blue-500"
                            />

                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </span>

                        </div>
                        <div className="mt-10">
                            {/* Button */}
                            <button type="submit" className="w-full bg-[#6292F2] hover:bg-blue-600 text-white py-2 rounded-md text-lg font-medium transition" onClick={()=> navigate('/dashboard')}>
                                Continue
                            </button>
                        </div>



                    </form>

                    {/* Login */}
                    <p className="text-sm text-(--text-primary) text-center mt-10">
                        Don’t have an account?{" "}
                        <span className="text-[#6292F2] cursor-pointer" onClick={()=>navigate('/signup')}>Signup</span>
                    </p>

                </div>
                {/* Left Image */}
                <div className="p-4">
                    <img
                        src={signupImg}
                        alt="signup"
                        className="w-full h-[700px] object-cover rounded-lg"
                    />
                </div>



            </div>

        </div>
    );
};

export default Login;