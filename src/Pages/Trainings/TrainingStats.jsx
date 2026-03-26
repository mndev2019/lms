import React from "react";
import line from '../../assets/Image/statsline.png'

const TrainingStats = () => {
  const stats = [
    { number: "30+", label: "Event Completed" },
    { number: "750+", label: "Participant" },
    { number: "15+", label: "Trainers" },
    { number: "1000+", label: "Students" },
  ];

  return (
   <div className=" py-15">
  <div className="max-w-6xl mx-auto grid grid-cols-4 items-center text-center">

    {stats.map((item, index) => (
      <div key={index} className="relative flex flex-col items-center">

        <h2 className="text-[#EACF00] text-[40px] font-bold">
          {item.number}
        </h2>

        <p className="text-[20px] font-semibold mt-2 text-(--text-primary)">
          {item.label}
        </p>

        {/* divider */}
        {index !== stats.length - 1 && (
          <img
            src={line}
            alt="line"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-15"
          />
        )}

      </div>
    ))}

  </div>
</div>
  
  );
};

export default TrainingStats;