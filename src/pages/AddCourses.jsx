import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Upload } from "lucide-react";
import "./AddCourses.css";

const AddCourses = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    courseName: "",
    courseCode: "",
    creditHours: "",
    semester: "",
    department: "",
    courseDescription: "",
  });
  const [courseImage, setCourseImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCourseImage(URL.createObjectURL(file));
    }
  };

  const handleSaveCourse = () => {
    console.log("Saving course:", courseData);
    // Save course logic here
    navigate("/dashboard/courses");
  };

  const handleCancel = () => {
    navigate("/dashboard/courses");
  };

  return (
    <div className="add-courses-wrapper">
      <div className="add-courses-panel">
        
        <div className="add-courses-header">
          <h2>Add New Course</h2>
          <p>Create a new course and manage its content throughout semester.</p>
        </div>

        <div className="add-courses-content">
          <div className="course-form">
            
            {/* Course Information Section */}
            <div className="form-section">
              <h3>Course Information</h3>
              
              {/* Course Image Upload */}
              <div className="image-upload-section">
                <div className="image-upload-box">
                  {courseImage ? (
                    <img src={courseImage} alt="Course" className="uploaded-image" />
                  ) : (
                    <div className="upload-placeholder">
                      <Camera size={48} />
                      <p>Click to upload course image</p>
                      <span>PNG, JPG or JPEG Upload</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="image-input"
                  />
                </div>
              </div>

              {/* Form Fields */}
              <div className="form-grid">
                <div className="form-group">
                  <label>Course Name</label>
                  <input
                    type="text"
                    name="courseName"
                    value={courseData.courseName}
                    onChange={handleInputChange}
                    placeholder="Enter course name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Course Code</label>
                  <input
                    type="text"
                    name="courseCode"
                    value={courseData.courseCode}
                    onChange={handleInputChange}
                    placeholder="e.g., CS-301"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Credit Hours</label>
                  <input
                    type="text"
                    name="creditHours"
                    value={courseData.creditHours}
                    onChange={handleInputChange}
                    placeholder="e.g., 3"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Semester</label>
                  <select
                    name="semester"
                    value={courseData.semester}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select Semester</option>
                    <option value="Spring 2024">Spring 2024</option>
                    <option value="Fall 2024">Fall 2024</option>
                    <option value="Spring 2025">Spring 2025</option>
                    <option value="Fall 2025">Fall 2025</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Department</label>
                  <select
                    name="department"
                    value={courseData.department}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Engineering">Engineering</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label>Course Description</label>
                  <textarea
                    name="courseDescription"
                    value={courseData.courseDescription}
                    onChange={handleInputChange}
                    placeholder="Enter course description..."
                    className="form-textarea"
                    rows="4"
                  />
                </div>
              </div>

              {/* Note */}
              <div className="form-note">
                <p>
                  After creating the course, you can add weekly topics, assessments, 
                  and students from the course detail page.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="form-actions">
                <button 
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button 
                  className="save-btn"
                  onClick={handleSaveCourse}
                >
                  Save Course
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddCourses;