import React, { useState } from "react";

const plans = [
    {
        name: "Starter",
        desc: "Ideal for creators launching their first online course stack.",
        priceMonthly: 10,
        priceYearly: 8,
        oldPrice: 12,
        button: "Start Free Trial",
        highlight: false,
        features: [
            "Create and publish courses",
            "Manage students and enrollments",
            "Accept payments online",
            "Track learning progress",
            "Basic analytics and reports",
        ],
    },
    {
        name: "Professional",
        desc: "Built for educators and teams looking to grow their learning platform.",
        priceMonthly: 20,
        priceYearly: 16,
        oldPrice: 25,
        button: "Start Free Trial",
        highlight: true,
        features: [
            "Everything in Starter",
            "Advanced course management",
            "Live classes and webinars",
            "Marketing and automation tools",
            "Detailed performance insights",
        ],
    },
];

const PricingSection = () => {

    const [billing, setBilling] = useState("monthly");

    return (
        <section className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* top badge */}
                <span className="bg-[#EACF00] text-black px-8 py-1 rounded-full text-[18px] font-semibold">
                    Pricing
                </span>

                {/* heading */}
                <h2 className="text-4xl inria font-bold text-[50px] text-(--text-primary) mt-6 leading-snug">
                    Simple Plans That Grow <br /> With Your Learning Platform
                </h2>

                {/* toggle */}
                <div className="flex justify-center mt-6">
                    <div className="bg-(--text-secondary) rounded-full p-1 flex gap-1">
                        <button
                            onClick={() => setBilling("monthly")}
                            className={`px-4 py-1 rounded-full text-sm ${billing === "monthly"
                                    ? "bg-(--text-primary) text-white"
                                    : "text-black"
                                }`}
                        >
                            Monthly
                        </button>

                        <button
                            onClick={() => setBilling("yearly")}
                            className={`px-4 py-1 rounded-full text-sm ${billing === "yearly"
                                    ? "bg-(--text-primary) text-white"
                                    : "text-black"
                                }`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                {/* pricing cards */}
                <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">
                    {plans.map((plan, index) => {
                        const price =
                            billing === "monthly"
                                ? plan.priceMonthly
                                : plan.priceYearly;

                        return (
                            <div
                                key={index}
                                className={`relative bg-[linear-gradient(180deg,#F3F1EC_0%,#FFFFFF_100%)] 
rounded-[32px] p-8 shadow-sm text-left ${plan.highlight?"mt-10":""}`}>
                                {/* popular badge */}
                                {plan.highlight && (
                                    <span className="absolute -top-3 right-[35%] bg-(--text-primary) text-white text-sm px-8 py-1 rounded-full rotate-8">
                                        Most popular
                                    </span>
                                )}

                                <h3 className="text-[22px] text-(--text-primary) font-semibold">
                                    {plan.name}
                                </h3>

                                <p className="text-[16px] text-(--text-primary) mt-2">
                                    {plan.desc}
                                </p>

                                {/* price */}
                                <div className="mt-5 flex items-end gap-2">
                                    <span className="text-[50px] font-semibold">
                                        ${price}
                                    </span>
                                    <span className="text-[28px] text-(--primary) line-through">
                                        ${plan.oldPrice}
                                    </span>
                                </div>

                                {/* button */}
                                <button
                                    className={`mt-6 w-full py-2 rounded-full font-medium ${plan.highlight
                                            ? "bg-[#2E58BB] text-white"
                                            : "bg-(--text-primary) text-white"
                                        }`}
                                >
                                    {plan.button}
                                </button>
                                <h2 className="font-semibold text-[20px] text-(--text-primary) my-5">
                                    Features
                                </h2>

                                {/* features */}
                                <ul className="space-y-3 text-[15px] font-semibold text-(--text-primary)">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex gap-2">
                                            ✓ {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default PricingSection