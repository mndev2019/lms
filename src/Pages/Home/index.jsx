import React from 'react'
import Banner from './Banner'
import About from './About'
import Experience from './Experience' 
import Feature from './Feature'
import Platform from './Platform'
import Faq from './Faq'
import PopularCourses from './PopularCourses'
import Works from './Works'
import CalenderSection from './CalenderSection'

const Home = () => {
  return (
   <>
   <Banner/>
   <About/>
   <CalenderSection/>
   <Experience/>
   <PopularCourses/>
   <Feature/>
   <Works/>
   <Platform/>
   <Faq/>
   </>
  )
}

export default Home
