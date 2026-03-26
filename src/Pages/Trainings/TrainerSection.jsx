import React from "react";
import trainer from '../../assets/Image/trainer.jpg'

const TrainersSection = () => {
  const trainers = [
    {
      name: "Michael Johnson",
      role: "Senior Corporate Trainer",
      img: trainer,
    },
    {
      name: "Michael Johnson",
      role: "Senior Corporate Trainer",
      img: trainer,
    },
    {
      name: "Michael Johnson",
      role: "Senior Corporate Trainer",
      img: trainer,
    },
  ];

  return (
    <div className="px-10 py-16">

      <div className="max-w-7xl mx-auto px-6">

       <div className="flex justify-between items-center mb-12 flex-wrap gap-6">
          <div>
            <h2 className="text-[36px] font-bold text-(--text-primary) mb-4 inria">
             World-Class Training → World-Class Trainers
            </h2>

            
          </div>

          <button className="bg-[#EACF00] px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-yellow-500 transition">
           View All Trainers →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {trainers.map((trainer, index) => (
            <div key={index} className="bg-white shadow rounded overflow-hidden">

              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full object-cover"
              />

              <div className="bg-(--primary)  text-white p-4">
                <h3 className="text-[#EACF00] font-semibold text-[26px]">
                  {trainer.name}
                </h3>
                <p className="text-[22px]">{trainer.role}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default TrainersSection;