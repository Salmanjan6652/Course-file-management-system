import "../styles/Landing.css";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, FileText, BarChart3, Award, Clock, Star, TrendingUp, Shield, Zap } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Course Planning",
      description: "Organize 16-week semester plans with drag-and-drop interface",
      color: "#3b82f6"
    },
    {
      icon: <Users size={32} />,
      title: "Student Management",
      description: "Track student enrollment and performance analytics",
      color: "#10b981"
    },
    {
      icon: <FileText size={32} />,
      title: "PDF Generation",
      description: "Auto-generate comprehensive course documentation",
      color: "#8b5cf6"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Assessment Tools",
      description: "Create quizzes, assignments, and exams",
      color: "#f59e0b"
    },
    {
      icon: <Award size={32} />,
      title: "Analytics Dashboard",
      description: "Track course performance and engagement metrics",
      color: "#6366f1"
    },
    {
      icon: <Clock size={32} />,
      title: "Time Management",
      description: "Schedule and automate course delivery",
      color: "#a855f7"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Courses", icon: <BookOpen size={20} /> },
    { number: "10K+", label: "Students Enrolled", icon: <Users size={20} /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star size={20} /> },
    { number: "24/7", label: "Support Available", icon: <Shield size={20} /> }
  ];

  return (
    <div className="landing">

      {/* TOP SECTION */}
      <div className="topSection">

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar-brand">
            <div className="brand-icon">
              <FileText size={28} />
            </div>
            <span className="brand-text">CourseHub</span>
          </div>

          <div className="navbar-actions">
            <button className="nav-btn secondary" onClick={() => navigate("/signin")}>
              Sign In
            </button>
            <button className="nav-btn primary" onClick={() => navigate("/signup")}>
              Get Started
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">

          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-badge">
                <span className="badge-icon"><Zap size={16} /></span>
                <span className="badge-text">Revolutionary Course Management</span>
              </div>

              <h1 className="hero-title">
                Transform Your Teaching Experience
              </h1>

              <p className="hero-description">
                The most comprehensive platform for university teachers to manage courses, engage students, and track success. Join thousands of educators who have already streamlined their academic workflow.
              </p>

              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <button className="btn secondary" onClick={() => navigate("/signin")}>
                  View Demo
                </button>
                <button className="btn primary" onClick={() => navigate("/signup")}>
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-visual">
              <div className="floating-cards">
                <div className="floating-card card-1">
                  <FileText size={24} />
                  <span>Course Files</span>
                </div>
                <div className="floating-card card-2">
                  <Users size={24} />
                  <span>Students</span>
                </div>
                <div className="floating-card card-3">
                  <BarChart3 size={24} />
                  <span>Analytics</span>
                </div>
              </div>
              <div className="hero-graphic">
                <div className="circle-progress">
                  <div className="progress-ring"></div>
                  <div className="center-icon">
                    <TrendingUp size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              Everything You Need to Succeed
            </h2>
            <p className="features-subtitle">
              Powerful features designed specifically for modern educators
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <button className="feature-btn">
                  Learn More <TrendingUp size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Transform Your Teaching?</h2>
            <p>Join thousands of educators who are already using CourseHub to streamline their academic workflow.</p>
          </div>
          <div className="cta-actions">
            <button className="btn secondary" onClick={() => navigate("/signin")}>
              Sign In
            </button>
            <button className="btn primary" onClick={() => navigate("/signup")}>
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Landing;