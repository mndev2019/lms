import React, { useRef } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
    const fileInputRef = useRef(null);

    const handleCameraClick = () => {
        fileInputRef.current.click(); // ye file window open karega
    };
    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-[#595353]/10 to-white">


            {/* Profile Picture Section */}
            <div className="grid grid-cols-2 gap-6 items-center mb-10">
                <h2 className="text-lg font-semibold">Profile Picture</h2>

                {/* RIGHT ALIGN FIX */}
                <div className="flex justify-end">
                    <div className="relative w-28 h-28">

                        {/* Profile Circle */}
                        <div className="w-28 h-28 rounded-full bg-teal-600 flex items-center justify-center text-white text-4xl">
                            M
                        </div>

                        {/* Camera Icon */}
                        <div
                            onClick={handleCameraClick}
                            className="absolute bottom-0 right-0 bg-gray-400 p-2 rounded-full cursor-pointer"
                        >
                            <FaCamera className="text-white text-sm" />
                        </div>

                        {/* Hidden File Input */}
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                        />
                    </div>
                </div>
            </div>

            {/* Update Profile */}
            <div className="grid grid-cols-3 gap-6 mb-10">
                <h2 className="text-lg font-semibold">Update Profile Details</h2>

                <div className="col-span-2 bg-gray-50 p-6 rounded">
                    <div className="space-y-4">

                        <div>
                            <label className="text-sm font-medium">Name *</label>
                            <input
                                type="text"
                                defaultValue="Muskan Ansari"
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value="muskan.ansari@ramot.online"
                                disabled
                                className="w-full border p-2 rounded mt-1 bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Mobile *</label>
                            <input
                                type="text"
                                defaultValue="+91 9335829697"
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Detail Address</label>
                            <input
                                type="text"
                                placeholder="Detail Address"
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">State</label>
                            <input
                                type="text"
                                placeholder="State"
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div className="text-right">
                            <button className="bg-[#595353] text-white px-4 py-2 rounded-xl shadow hover:opacity-90 transition">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Change Password */}
            <div className="grid grid-cols-3 gap-6 mb-10">
                <h2 className="text-lg font-semibold">Change Password</h2>

                <div className="col-span-2 bg-gray-50 p-6 rounded">
                    <div className="space-y-4">

                        <div>
                            <label className="text-sm font-medium">Current Password</label>
                            <input
                                type="password"
                                placeholder="Current Password"
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">New Password</label>
                            <input
                                type="password"
                                placeholder="New Password"
                                className="w-full border p-2 rounded mt-1"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Must contain atleast 1 uppercase, 1 lowercase and 1 numeric. Minimum 8 characters.
                            </p>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Retype new Password</label>
                            <input
                                type="password"
                                placeholder="Retype new Password"
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div className="text-right">
                            <button className="bg-[#595353] text-white px-4 py-2 rounded-xl shadow hover:opacity-90 transition">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Profile */}
            <div className="grid grid-cols-3 gap-6">
                <h2 className="text-lg font-semibold">Delete Profile</h2>

                <div className="col-span-2 bg-gray-50 p-6 rounded">
                    <div className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2" />
                        <span>I agree to delete my profile</span>
                    </div>

                    <div className="text-right">
                        <button className="bg-red-600 text-white px-6 py-2 rounded">
                            Delete
                        </button>
                    </div>

                    <p className="text-xs text-gray-400 mt-4">
                        Please note that if you choose to delete your own profile, your learner account would no longer exist.
                    </p>
                </div>
            </div>

        </div>

    );
};

export default Profile;