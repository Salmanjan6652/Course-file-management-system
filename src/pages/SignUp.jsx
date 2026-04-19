import "../styles/SignUp.css";

import {
  UserPlus,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must contain uppercase, lowercase, and number";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // TODO: backend signup API connect here
      console.log("User Data:", formData);
      navigate("/signin");
    } catch (error) {
      setErrors({ general: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">

      <div className="signup-card">

        {/* TITLE */}
        <h2 className="signup-title">
          Create Your Account
        </h2>

        {/* GENERAL ERROR */}
        {errors.general && (
          <div className="error-message general-error">
            {errors.general}
          </div>
        )}

        {/* FORM */}
        <form className="signup-form" onSubmit={handleSubmit}>

          {/* ROW NAME */}
          <div className="signup-row">

            <div className={`signup-input-box ${errors.firstName ? 'error' : ''}`}>
              <UserPlus className="signup-icon" size={18} />
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`signup-input ${errors.firstName ? 'input-error' : ''}`}
                placeholder="first name"
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>

            <div className={`signup-input-box ${errors.lastName ? 'error' : ''}`}>
              <UserPlus className="signup-icon" size={18} />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`signup-input ${errors.lastName ? 'input-error' : ''}`}
                placeholder="last name"
              />
              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>

          </div>

          {/* EMAIL */}
          <div className={`signup-input-box ${errors.email ? 'error' : ''}`}>
            <Mail className="signup-icon" size={18} />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`signup-input ${errors.email ? 'input-error' : ''}`}
              placeholder="email address"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* PHONE */}
          <div className={`signup-input-box ${errors.phone ? 'error' : ''}`}>
            <Phone className="signup-icon" size={18} />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`signup-input ${errors.phone ? 'input-error' : ''}`}
              placeholder="phone number"
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          {/* PASSWORD */}
          <div className={`signup-input-box ${errors.password ? 'error' : ''}`}>
            <Lock className="signup-icon" size={18} />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              className={`signup-input ${errors.password ? 'input-error' : ''}`}
              placeholder="password"
            />

            <span
              className="signup-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {/* CONFIRM PASSWORD */}
          <div className={`signup-input-box ${errors.confirmPassword ? 'error' : ''}`}>
            <Lock className="signup-icon" size={18} />
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type={showConfirm ? "text" : "password"}
              className={`signup-input ${errors.confirmPassword ? 'input-error' : ''}`}
              placeholder="confirm password"
            />

            <span
              className="signup-eye"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
          </div>

          {/* BUTTON */}
          <button 
            type="submit" 
            className="signup-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Sign up'}
          </button>

        </form>

        {/* FOOTER */}
        <p className="signup-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")}>
            Sign in
          </span>
        </p>

      </div>
    </div>
  );
};

export default SignUp;