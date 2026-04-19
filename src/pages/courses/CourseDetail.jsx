import React, { useState } from "react";
import { FileText, Download, Upload, Camera } from "lucide-react";
import "./CourseDetail.css";

const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState("generate-pdf");
  const [selectedContent, setSelectedContent] = useState({
    courseInfo: true,
    coursePlan: true,
    assessments: false,
    studentRecords: false,
    studentMarks: false,
  });
  const [pdfFormat, setPdfFormat] = useState({
    paperSize: "A4",
    colorMode: "Full Color",
    orientation: "Portrait",
  });

  const courseData = {
    name: "Data Structures and Algorithms",
    code: "CS-301",
    creditHours: "3",
    semester: "Spring 2024",
    department: "Computer Science",
    enrolledStudents: 40,
  };

  const contentOptions = [
    {
      id: "courseInfo",
      label: "Course Information",
      description: "Basic course details, code, department, and objectives",
    },
    {
      id: "coursePlan",
      label: "16-Week Course Plan",
      description: "Complete weekly breakdown with topics and materials",
    },
    {
      id: "assessments",
      label: "Assessments",
      description: "Quizzes, presentations, midterms, and final exam details",
    },
    {
      id: "studentRecords",
      label: "Student Records",
      description: "Enrolled students list with registration numbers",
    },
    {
      id: "studentMarks",
      label: "Student Marks",
      description: "Complete marks breakdown for all assessments",
    },
  ];

  const formatOptions = [
    {
      id: "paperSize",
      label: "Paper Size",
      value: pdfFormat.paperSize,
    },
    {
      id: "colorMode",
      label: "Color Mode",
      value: pdfFormat.colorMode,
    },
    {
      id: "orientation",
      label: "Orientation",
      value: pdfFormat.orientation,
    },
  ];

  const handleContentChange = (id) => {
    setSelectedContent(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleGeneratePDF = () => {
    console.log("Generating PDF with:", { selectedContent, pdfFormat });
    // PDF generation logic here
  };

  return (
    <div className="course-detail-wrapper">
      <div className="course-detail-panel">
        
        {/* Course Header */}
        <div className="course-header">
          <h1>{courseData.name}</h1>
          <div className="course-meta-info">
            <div className="meta-item">
              <span className="meta-label">Course Code:</span>
              <span className="meta-value">{courseData.code}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Credit Hours:</span>
              <span className="meta-value">{courseData.creditHours}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Semester:</span>
              <span className="meta-value">{courseData.semester}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Department:</span>
              <span className="meta-value">{courseData.department}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Enrolled Students:</span>
              <span className="meta-value">{courseData.enrolledStudents}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="course-tabs">
          <button
            className={`tab-button ${activeTab === "course-plan" ? "active" : ""}`}
            onClick={() => setActiveTab("course-plan")}
          >
            Course Plan
          </button>
          <button
            className={`tab-button ${activeTab === "assessments" ? "active" : ""}`}
            onClick={() => setActiveTab("assessments")}
          >
            Assessments
          </button>
          <button
            className={`tab-button ${activeTab === "students" ? "active" : ""}`}
            onClick={() => setActiveTab("students")}
          >
            Students
          </button>
          <button
            className={`tab-button ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
          <button
            className={`tab-button ${activeTab === "generate-pdf" ? "active" : ""}`}
            onClick={() => setActiveTab("generate-pdf")}
          >
            Generate PDF
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "generate-pdf" && (
            <div className="generate-pdf-section">
              {/* PDF Generation Box */}
              <div className="pdf-generation-box">
                <div className="pdf-icon">
                  <FileText size={64} />
                </div>
                <h3>Course File Document</h3>
                <p>
                  Generate a comprehensive PDF containing all course information, 
                  weekly plans, assessments, and student records.
                </p>
              </div>

              {/* Select Content Section */}
              <div className="content-selection">
                <h4>Select Content to Include</h4>
                <div className="content-options">
                  {contentOptions.map((option) => (
                    <div key={option.id} className="content-option">
                      <label className="checkbox-container">
                        <input
                          type="checkbox"
                          checked={selectedContent[option.id]}
                          onChange={() => handleContentChange(option.id)}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <div className="option-details">
                        <h5>{option.label}</h5>
                        <p>{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF Format Options */}
              <div className="format-options">
                <h4>PDF Format Options</h4>
                <div className="format-cards">
                  {formatOptions.map((option) => (
                    <div key={option.id} className="format-card">
                      <h5>{option.label}</h5>
                      <p>{option.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <div className="generate-section">
                <button className="generate-btn" onClick={handleGeneratePDF}>
                  <Download size={20} />
                  Generate PDF
                </button>
              </div>
            </div>
          )}

          {/* Other tab contents can be added here */}
          {activeTab === "course-plan" && (
            <div className="tab-placeholder">
              <h3>Course Plan</h3>
              <p>Weekly course plan and curriculum details will appear here.</p>
            </div>
          )}

          {activeTab === "assessments" && (
            <div className="tab-placeholder">
              <h3>Assessments</h3>
              <p>Quizzes, assignments, and exam details will appear here.</p>
            </div>
          )}

          {activeTab === "students" && (
            <div className="tab-placeholder">
              <h3>Students</h3>
              <p>Enrolled students list and their information will appear here.</p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="tab-placeholder">
              <h3>Settings</h3>
              <p>Course settings and configuration options will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
