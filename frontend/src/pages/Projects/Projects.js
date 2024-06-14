import React from "react";
import "./Projects.css";
import project1Img from "./Gambar.png";
import project2Img from "./Gambar.png";
import project3Img from "./Gambar.png";

function Projects() {
  return (
    <div className="projects">
      <h2>Proyek Saya</h2>
      <p>Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
      <div className="projects-grid">
        <div className="projects-item">
          <h3>Proyek 1</h3>
          <img src={project1Img} alt="Proyek 1" />
          <p>Website Jasa</p>
        </div>
        <div className="projects-item">
          <h3>Proyek 2</h3>
          <img src={project2Img} alt="Proyek 2" />
          <p>Website Jasa</p>
        </div>
        <div className="projects-item">
          <h3>Proyek 3</h3>
          <img src={project3Img} alt="Proyek 3" />
          <p>Website Jasa</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
