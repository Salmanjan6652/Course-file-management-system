import React, { useState } from "react";
import cs from "../../../assets/photo.avif";
import "./Detail.css";

import {
  BookOpen,
  Users,
  Calendar,
  GraduationCap,
  FileText,
  Download,
  Plus,
  Eye,
  Edit,
} from "lucide-react";

const Detail = () => {
  const [activeTab, setActiveTab] = useState("plan");
  const [showForm, setShowForm] = useState(false);
  const [showView, setShowView] = useState(false);

  const [weeks, setWeeks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);

  // ✅ NEW FORM STATE
  const [form, setForm] = useState({
    week: "",
    topics: [],
    currentTopic: "",
    file: null,
  });

  const course = {
    title: "Data Structures & Algorithms",
    code: "CS-403",
    creditHours: 3,
    semester: "Spring 2026",
    department: "Computer Science",
    students: 52,
    image: cs,
  };

  // ================= ADD TOPIC =================
  const handleAddTopic = () => {
    if (form.currentTopic.trim() === "") return;

    setForm({
      ...form,
      topics: [...form.topics, form.currentTopic],
      currentTopic: "",
    });
  };

  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const newWeek = {
      week: form.week,
      topics: form.topics,
      file: form.file ? form.file.name : "No File",
    };

    if (editingIndex !== null) {
      const updated = [...weeks];
      updated[editingIndex] = newWeek;
      setWeeks(updated);
      setEditingIndex(null);
    } else {
      setWeeks([...weeks, newWeek]);
    }

    setForm({
      week: "",
      topics: [],
      currentTopic: "",
      file: null,
    });

    setShowForm(false);
  };

  // ================= EDIT =================
  const handleEdit = (index) => {
    setForm({
      ...weeks[index],
      currentTopic: "",
    });
    setEditingIndex(index);
    setShowForm(true);
  };

  // ================= VIEW =================
  const handleView = (week) => {
    setSelectedWeek(week);
    setShowView(true);
  };

  // ================= DOWNLOAD =================
  const handleDownload = (week) => {
    const data = JSON.stringify(week, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `Week-${week.week}.json`;
    a.click();
  };

  return (
    <div className="page">
      <div className="main-container">

        {/* HEADER */}
        <div className="course-header-card">
          <img src={course.image} className="course-img" alt="course" />

          <div className="info">
            <h1>{course.title}</h1>
            <p>{course.code}</p>

            <div className="meta">
              <span><BookOpen size={16}/> {course.creditHours}</span>
              <span><Calendar size={16}/> {course.semester}</span>
              <span><GraduationCap size={16}/> {course.department}</span>
              <span><Users size={16}/> {course.students}</span>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="tabs">
          {["plan", "assessment", "students", "settings", "pdf"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "tab active" : "tab"}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="content">

          {/* EMPTY */}
          {activeTab === "plan" && weeks.length === 0 && (
            <div className="empty-box">
              <button className="big-add-btn" onClick={() => setShowForm(true)}>
                <Plus size={20} /> Add First Week
              </button>
              <p>No course plan yet</p>
            </div>
          )}

          {/* WEEK LIST */}
          {activeTab === "plan" &&
            weeks.map((w, i) => (
              <div key={i} className="week-card">

                <div className="week-tag">
                  Week {w.week}
                </div>

                <div className="week-content">
                  {w.topics.map((t, idx) => (
                    <span key={idx} className="topic-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="file-area">
                  <div className="file">
                    <FileText size={16} />
                    <span>{w.file}</span>
                  </div>

                  <button onClick={() => handleView(w)}>
                    <Eye size={16} />
                  </button>

                  <button onClick={() => handleEdit(i)}>
                    <Edit size={16} />
                  </button>

                  <button onClick={() => handleDownload(w)}>
                    <Download size={16} />
                  </button>
                </div>

              </div>
            ))}

          {/* ADD BUTTON */}
          {activeTab === "plan" && (
            <button className="big-add-btn" onClick={() => setShowForm(true)}>
              <Plus size={20} /> Add Week
            </button>
          )}

        </div>

        {/* ================= FORM ================= */}
        {showForm && (
          <div className="modal">
            <div className="form-box">

              <h2>Create Week Plan</h2>

              <form onSubmit={handleSubmit} className="form">

                <input
                  type="number"
                  placeholder="Week Number"
                  value={form.week}
                  onChange={(e) =>
                    setForm({ ...form, week: e.target.value })
                  }
                  required
                />

                {/* TOPIC INPUT */}
                <div className="topic-input-row">

                  <input
                    type="text"
                    placeholder="Enter topic name"
                    value={form.currentTopic}
                    onChange={(e) =>
                      setForm({ ...form, currentTopic: e.target.value })
                    }
                  />

                  <button
                    type="button"
                    className="done-btn"
                    onClick={handleAddTopic}
                  >
                    Done
                  </button>

                </div>

                {/* TAGS */}
                <div className="topic-list">
                  {form.topics.map((t, i) => (
                    <span key={i} className="topic-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {/* FILE */}
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) =>
                    setForm({ ...form, file: e.target.files[0] })
                  }
                />

                <button className="submit-btn">
                  {editingIndex !== null ? "Update" : "Create"}
                </button>

              </form>

            </div>
          </div>
        )}

        {/* VIEW */}
        {showView && selectedWeek && (
          <div className="modal">
            <div className="form-box">

              <h2>Week {selectedWeek.week}</h2>

              <div className="topic-list">
                {selectedWeek.topics.map((t, i) => (
                  <span key={i} className="topic-pill">
                    {t}
                  </span>
                ))}
              </div>

              <p><b>File:</b> {selectedWeek.file}</p>

              <button
                className="submit-btn"
                onClick={() => setShowView(false)}
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Detail;