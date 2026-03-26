import React from 'react'
import InnerBanner from '../../Component/InnerBanner'
import banner from '../../assets/Image/training.png'
import ComingUp from '../AllCourses/ComingUp'
import ExperienceCourse from './ExperienceCourse'

const Categories = () => {
  return (
   <>
    <InnerBanner title="Boost Skills with Expert-Led Training" subtitle="Empower your team with expert-led corporate training designed to build skills, improve productivity, and support professional growth." btn="Start Learning Today" image={banner}/>
    <ComingUp/>
    <ExperienceCourse/>
   </>
  )
}

export default Categories
