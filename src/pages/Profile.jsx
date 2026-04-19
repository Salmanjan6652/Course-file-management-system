import React, { useState } from "react";
import { Camera, X, Edit3, Save, User, Mail, Phone, Briefcase, MapPin, Award, BookOpen, Lock, Eye, EyeOff } from "lucide-react";
import "./Profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [profileData, setProfileData] = useState({
    teacherId: "TC2024001",
    name: "Sir Ahmed Khan",
    fullName: "Syed Ahmed Khan",
    department: "Computer Science",
    gender: "Male",
    qualification: "PhD in Computer Science",
    email: "ahmed.khan@university.edu",
    phoneNumber: "+92 300 1234567",
    designation: "Associate Professor",
    officeLocation: "Room 301, CS Department",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileEdit = () => {
    setIsEditMode(true);
  };

  const handleSaveChanges = () => {
    console.log("Saving profile:", profileData);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    // Reset to original data
    setProfileData({
      teacherId: "TC2024001",
      name: "Sir Ahmed Khan",
      fullName: "Syed Ahmed Khan",
      department: "Computer Science",
      gender: "Male",
      qualification: "PhD in Computer Science",
      email: "ahmed.khan@university.edu",
      phoneNumber: "+92 300 1234567",
      designation: "Associate Professor",
      officeLocation: "Room 301, CS Department",
    });
  };

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
  };

  const handlePasswordUpdate = () => {
    console.log("Updating password:", passwordData);
    // Password update logic here
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handlePasswordCancel = () => {
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-panel">
        
        <div className="profile-header">
          <h2>My Profile</h2>
          <p>Manage your personal information and preferences</p>
        </div>

        <div className="profile-content">
          
          {/* Profile Image Section */}
          <div className="profile-image-section">
            <div className="profile-image-container">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-image" />
              ) : (
                <div className="profile-avatar">
                  <User size={80} />
                </div>
              )}
              
              {isEditMode && (
                <div className="image-actions">
                  <div className="image-upload-box">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="image-input"
                    />
                    <button className="image-btn select-btn">
                      <Camera size={16} />
                      Select New Photo
                    </button>
                  </div>
                  <button 
                    className="image-btn remove-btn"
                    onClick={handleRemoveImage}
                  >
                    <X size={16} />
                    Remove
                  </button>
                </div>
              )}
            </div>
            
            {!isEditMode && (
              <button className="edit-profile-btn" onClick={handleProfileEdit}>
                <Edit3 size={16} />
                Edit
              </button>
            )}
          </div>

          {/* Tabs */}
          <div className="profile-tabs">
            <button
              className={`tab-button ${activeTab === "general" ? "active" : ""}`}
              onClick={() => setActiveTab("general")}
            >
              General Information
            </button>
            <button
              className={`tab-button ${activeTab === "security" ? "active" : ""}`}
              onClick={() => setActiveTab("security")}
            >
              Security
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            
            {/* General Information Tab */}
            {activeTab === "general" && (
              <div className="general-info-section">
                <div className="info-grid">
                  
                  {/* Name */}
                  <div className="info-item">
                    <label className="info-label">Name</label>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={profileData.fullName}
                        onChange={(e) => handleProfileChange("fullName", e.target.value)}
                        className="info-input"
                      />
                    ) : (
                      <div className="info-value">{profileData.name}</div>
                    )}
                  </div>

                  {/* Teacher ID */}
                  <div className="info-item">
                    <label className="info-label">Teacher ID</label>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={profileData.teacherId}
                        onChange={(e) => handleProfileChange("teacherId", e.target.value)}
                        className="info-input"
                      />
                    ) : (
                      <div className="info-value">{profileData.teacherId}</div>
                    )}
                  </div>

                  {/* Department */}
                  <div className="info-item">
                    <label className="info-label">Department</label>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={profileData.department}
                        onChange={(e) => handleProfileChange("department", e.target.value)}
                        className="info-input"
                      />
                    ) : (
                      <div className="info-value">{profileData.department}</div>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="info-item">
                    <label className="info-label">Gender</label>
                    {isEditMode ? (
                      <select
                        value={profileData.gender}
                        onChange={(e) => handleProfileChange("gender", e.target.value)}
                        className="info-input"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <div className="info-value">{profileData.gender}</div>
                    )}
                  </div>

                  {/* Qualification */}
                  <div className="info-item">
                    <label className="info-label">Qualification</label>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={profileData.qualification}
                        onChange={(e) => handleProfileChange("qualification", e.target.value)}
                        className="info-input"
                      />
                    ) : (
                      <div className="info-value">{profileData.qualification}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="info-item">
                    <label className="info-label">Email</label>
                    {isEditMode ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleProfileChange("email", e.target.value)}
                        className="info-input"
                      />
                    ) : (
                      <div className="info-value">{profileData.email}</div>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="info-item">
                    <label className="info-label">Phone Number</label>
                    {isEditMode ? (
                      <input
                        type="tel"
                        value={profileData.phoneNumber}
                        onChange={(e) => handleProfileChange("phoneNumber", e.target.value)}
                        className="info-input"
                      />
                    ) : (
                      <div className="info-value">{profileData.phoneNumber}</div>
                    )}
                  </div>

                  {/* Designation */}
                  <div className="info-item">
                    <label className="info-label">Designation</label>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={profileData.designation}
                        onChange={(e) => handleProfileChange("designation", e.target.value)}
                        className="info-input"
                      />
                    ) : (
                      <div className="info-value">{profileData.designation}</div>
                    )}
                  </div>

                  {/* Office Location */}
                  <div className="info-item">
                    <label className="info-label">Office Location</label>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={profileData.officeLocation}
                        onChange={(e) => handleProfileChange("officeLocation", e.target.value)}
                        className="info-input"
                      />
                    ) : (
                      <div className="info-value">{profileData.officeLocation}</div>
                    )}
                  </div>
                </div>

                {/* Action Buttons for Edit Mode */}
                {isEditMode && (
                  <div className="form-actions">
                    <button className="cancel-btn" onClick={handleCancel}>
                      Cancel
                    </button>
                    <button className="save-btn" onClick={handleSaveChanges}>
                      <Save size={16} />
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="security-section">
                <h3>Change Password</h3>
                
                <div className="password-form">
                  <div className="form-group">
                    <label>Current Password</label>
                    <div className="password-input-container">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                        className="form-input"
                        placeholder="Enter current password"
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      >
                        {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>New Password</label>
                    <div className="password-input-container">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                        className="form-input"
                        placeholder="Enter new password"
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Confirm Password</label>
                    <div className="password-input-container">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        className="form-input"
                        placeholder="Confirm new password"
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button className="cancel-btn" onClick={handlePasswordCancel}>
                      Cancel
                    </button>
                    <button className="save-btn" onClick={handlePasswordUpdate}>
                      <Lock size={16} />
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;