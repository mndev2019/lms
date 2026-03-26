import React from 'react'
import InnerBanner from '../../Component/InnerBanner'
import banner from '../../assets/Image/learningpath.png'
import TrustPlatform from './TrustPlatform'
import ActionBox from './ActionBox'
import LearningPlatform from './LearningPlatform'

const LearningPath = () => {
  return (
  <>
   <InnerBanner title="Explore Our New Learning Programs" subtitle="Explore our newest courses designed to help you learn the latest skills and stay ahead in your learning journey." btn="Start Learning Today" image={banner}/>
   <TrustPlatform/>
   <ActionBox/>
   <LearningPlatform/>
  </>
  )
}

export default LearningPath
