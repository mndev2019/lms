import React from "react";

const PurchaseHistory = () => {
    const data = [
        {
            date: "2026/03/26 4:26:34 PM",
            orderId: "FREE1774522594217",
            item: "Basics of UI/UX Free lecture",
            amount: "Free",
            status: "Success",
        },
    ];

    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-[#595353]/10 to-white">
            <h1 className="text-2xl font-bold text-[#595353] mb-6">
                Purchase History
            </h1>
            <div className="bg-white rounded-lg shadow p-4">

                {/* Table Header */}
                <div className="grid grid-cols-6 text-gray-500 text-sm font-medium border-b pb-3">
                    <div>DATE</div>
                    <div className="col-span-2">ORDER ID/TRANSACTION ID</div>
                    <div>ITEMS</div>
                    <div>AMOUNT</div>
                    <div>STATUS</div>

                </div>

                {/* Table Rows */}
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-6 items-center text-sm py-4 border-b"
                    >
                        <div>{item.date}</div>

                        <div className="col-span-2 text-gray-700">
                            {item.orderId}
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-lg">•</span>
                            {item.item}
                        </div>

                        <div className="font-medium">{item.amount}</div>

                        <div className="text-green-600 font-medium">
                            {item.status}
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurchaseHistory;