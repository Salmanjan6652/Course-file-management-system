import "../styles/SignIn.css";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    return newErrors;
  };

  const handleLogin = async (e) => {
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // future: backend login yahan connect hoga
      console.log("Login attempt:", { email, password });
      navigate("/dashboard");
    } catch (error) {
      setErrors({ general: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-container">

      <div className="signin-card">

        {/* TITLE */}
        <h2 className="signin-title">Welcome Back</h2>

        {/* SUBTITLE */}
        <p className="signin-subtitle">
          Enter your email and password to access your account
        </p>

        {/* GENERAL ERROR */}
        {errors.general && (
          <div className="error-message general-error">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleLogin}>
          {/* EMAIL */}
          <div className={`input-group ${errors.email ? 'error' : ''}`}>
            <Mail className="input-icon" size={18} />
            <input
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors(prev => ({ ...prev, email: '' }));
                }
              }}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* PASSWORD */}
          <div className={`input-group ${errors.password ? 'error' : ''}`}>
            <Lock className="input-icon" size={18} />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors(prev => ({ ...prev, password: '' }));
                }
              }}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {/* FORGET PASSWORD */}
          <div className="forget">
            <a href="#">Forget password?</a>
          </div>

          {/* BUTTON */}
          <button 
            type="submit" 
            className="signin-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        {/* FOOTER */}
        <p className="signin-footer">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>

      </div>

    </div>
  );
};

export default SignIn;