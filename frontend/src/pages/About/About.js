import React from "react";
import "./About.css";
import profilePic from "./Profile.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile">
        <img src={profilePic} alt="Profile Picture" />
        <h3> Muniz Hestur Putra </h3>
        <p>Front End Development</p>
      </div>
      <div className="about-content">
        <h3>Tentang Saya</h3>
        <p>Saya adalah mahasiswa UBSI Semester 6</p>
      </div>
    </div>
  );
}

export default Profile;
