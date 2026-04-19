import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";

/* 👇 IMPORTS */
import MyCourses from "./pages/courses/MyCourses.jsx";
import CourseDetail from "./pages/courses/CourseDetail.jsx";
import Detail from "./pages/courses/coursedetail/Detail";
import AddCourses from "./pages/AddCourses.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* Default Dashboard Page */}
          <Route index element={<Dashboard />} />

          {/* Courses Page */}
          <Route path="courses" element={<MyCourses />} />

          {/* Course Detail Page */}
          <Route path="course/:id" element={<CourseDetail />} />

          {/* Add Course Page */}
          <Route path="add-course" element={<AddCourses />} />

          {/* Profile Page */}
          <Route path="profile" element={<Profile />} />

          {/* ⭐ ADD THIS (IMPORTANT) */}
          <Route path="course-detail/:id" element={<Detail />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;