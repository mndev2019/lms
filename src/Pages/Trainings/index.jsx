import React from 'react'
import InnerBanner from '../../Component/InnerBanner'
import banner from '../../assets/Image/training.png'
import TrainingStats from './TrainingStats'
import TrainingService from './TrainingService'
import TrainersSection from './TrainerSection'

const Trainings = () => {
  return (
    <>
      <InnerBanner title="Boost Skills with Expert-Led Training" subtitle="Empower your team with expert-led corporate training designed to build skills, improve productivity, and support professional growth." btn="Start Training" image={banner}/>
      <TrainingStats/>
      <TrainingService/>
      <TrainersSection/>
    </>
  )
}

export default Trainings
