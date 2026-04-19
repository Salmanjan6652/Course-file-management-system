import React from "react";
import "./MyCourses.css";
import cs1 from "../../assets/photo.avif";
import cs2 from "../../assets/photo.avif";
import cs3 from "../../assets/photo.avif";
import cs4 from "../../assets/photo.avif";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      code: "CS-301",
      instructor: "Dr. Sarah Johnson",
      thumbnail: cs1,
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      status: "Active",
      duration: "8 weeks",
      level: "Intermediate",
      creditHours: "3",
      semester: "Spring 2024",
      department: "Computer Science",
      enrolledStudents: 40
    },
    {
      id: 2,
      title: "Database Management Systems",
      code: "CS-302",
      instructor: "Prof. Michael Chen",
      thumbnail: cs2,
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      status: "Active",
      duration: "12 weeks",
      level: "Advanced",
      creditHours: "4",
      semester: "Spring 2024",
      department: "Computer Science",
      enrolledStudents: 35
    },
    {
      id: 3,
      title: "Web Development Fundamentals",
      code: "CS-201",
      instructor: "Dr. Emily Rodriguez",
      thumbnail: cs3,
      progress: 90,
      totalLessons: 20,
      completedLessons: 18,
      status: "Active",
      duration: "6 weeks",
      level: "Beginner",
      creditHours: "3",
      semester: "Fall 2023",
      department: "Computer Science",
      enrolledStudents: 45
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      code: "CS-401",
      instructor: "Dr. James Wilson",
      thumbnail: cs4,
      progress: 30,
      totalLessons: 28,
      completedLessons: 8,
      status: "Active",
      duration: "10 weeks",
      level: "Advanced",
      creditHours: "4",
      semester: "Spring 2024",
      department: "Computer Science",
      enrolledStudents: 25
    }
  ];

  return (
    <div className="courses-wrapper">

      <div className="courses-panel">

        <div className="courses-header">
          <h2>My Courses</h2>
          <p>Manage all your courses in one place</p>
        </div>

        {courses.length === 0 ? (
          <div className="empty-state">No courses available</div>
        ) : (

          <div className="courses-grid">

            {courses.map((course) => {
              const isActive = course.status === "Active";

              return (
                <div
                  key={course.id}
                  className={`course-card ${isActive ? "active" : "archived"}`}
                >

                  {/* COURSE THUMBNAIL */}
                  <div className="course-thumbnail">
                    <img src={course.thumbnail} alt={course.title} />
                    <div className="course-overlay">
                      <span className="course-level">{course.level}</span>
                    </div>
                  </div>

                  {/* COURSE CONTENT */}
                  <div className="course-content">

                    <h3 className="course-title">{course.title}</h3>
                    
                    <p className="course-instructor">
                      by {course.instructor}
                    </p>

                    <div className="course-meta">
                      <span className="course-duration">{course.duration}</span>
                      <span className="course-lessons">{course.completedLessons}/{course.totalLessons} lessons</span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="progress-section">
                      <div className="progress-header">
                        <span className="progress-text">Progress</span>
                        <span className="progress-percentage">{course.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* ACTION BUTTON */}
                    <button
                      className="continue-btn"
                      onClick={() => navigate(`/dashboard/course/${course.id}`)}
                    >
                      {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                    </button>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
};

export default MyCourses;