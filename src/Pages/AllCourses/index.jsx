import React from 'react'
import InnerBanner from '../../Component/InnerBanner'
import banner from '../../assets/Image/allcourse.png'
import ComingUp from './ComingUp'
import TrendingCourse from './TrendingCourse'
import LearnSection from './LearnSection'
import RecommendedCourse from './RecommendedCourse'

const AllCourses = () => {
    return (
        <>
            <InnerBanner title="Explore Our Trending
Learning Programs" subtitle="Discover our most loved courses chosen by thousands of learners to build practical skills and grow their careers." btn="Start Learning Today" image={banner} />
            <ComingUp />
            <TrendingCourse/>
            <LearnSection/>
            <RecommendedCourse/>
        </>
    )
}

export default AllCourses
