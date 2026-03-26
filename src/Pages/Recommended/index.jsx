import React from 'react'
import InnerBanner from '../../Component/InnerBanner'
import banner from '../../assets/Image/recommended.png'
import EnrolledCourse from './EnrolledCourse'
import Testimonial from './Testimonial'
import RecommendedCourse from '../AllCourses/RecommendedCourse'

const Recommended = () => {
  return (
   <>
     <InnerBanner title="Explore Our New Learning Programs" subtitle="Explore our newest courses designed to help you learn the latest skills and stay ahead in your learning journey." btn="Start Learning Today" image={banner}/>
     <EnrolledCourse/>
     <Testimonial/>
     <RecommendedCourse/>
   </>
  )
}

export default Recommended
