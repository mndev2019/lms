import React from 'react'
import action from '../../assets/Image/actionbox.png'
import { useNavigate } from 'react-router-dom'

const ActionBox = () => {
  const navigate = useNavigate("");
  return (
    <>
      <section
        className="w-full bg-cover bg-center h-[500px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${action})`,
        }}
      >
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-white mb-4">
            Why Learners Trust Our Platform
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Our learning platform is built to provide practical knowledge,
            expert guidance, and real-world skills.
          </p>

          <button onClick={()=> navigate('/login')} className="bg-white text-gray-700 font-semibold px-10 py-4 rounded-xl shadow-md hover:bg-gray-100 transition">
            Start Learning Today
          </button>

        </div>
      </section>
    </>
  )
}

export default ActionBox