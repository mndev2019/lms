import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'


import Home from './Pages/Home'
import AllCourses from './Pages/AllCourses'
import LearningPath from './Pages/LearningPath'
import Recommended from './Pages/Recommended'
import Trainings from './Pages/Trainings'
import Categories from './Pages/Categories'
import Pricing from './Pages/Pricing'
import WebCaenderDetail from './Pages/WebCalenderDetail'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import DashboardLayout from './Layout/DashboardLayout/DashboardLayout'
import Dashboard from './DashboardItems/Dashboard'
import CreateCourse from './DashboardItems/Courses/CreateCourse'
import ViewCourse from './DashboardItems/Courses/ViewCourse'




function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>


          <Route index element={<Home />} />
          <Route path='/all-courses' element={<AllCourses />} />
          <Route path='/learning-path' element={<LearningPath />} />
          <Route path='/recommended' element={<Recommended />} />
          <Route path='/trainings' element={<Trainings />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/web-calender' element={<WebCaenderDetail />} />

        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>


        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='create-course' element={<CreateCourse />} />
          <Route path='view-course' element={<ViewCourse/>}/>
        </Route>


      </>


    )

  )


  return (
    <>
      <RouterProvider router={ThemeRoute} />

    </>
  )
}

export default App
