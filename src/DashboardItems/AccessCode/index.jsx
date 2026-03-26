import React, { useState } from "react";

const AccessCode = () => {
    const [code, setCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Entered Code:", code);
    };

    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-[#595353]/10 to-white">
            <h1 className="text-2xl font-bold text-[#595353] mb-6">
                Access Code
            </h1>
            <div className="w-full max-w-4xl">

                {/* Heading */}
                <p className="text-gray-700 mb-4 text-sm">
                    Access Codes are special codes which enable access to courses.
                </p>

                {/* Box */}
                <div className="bg-gray-200 p-6 rounded-md">
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center gap-4"
                    >
                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Enter credit code..."
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="flex-1 border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        {/* Button */}
                        <button className="bg-[#595353] text-white px-4 py-2 rounded-xl shadow hover:opacity-90 transition">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default AccessCode;
