import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Josh Thyng</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" data-aos="fade-up">
        <div className="container">
          <img src="/pfp.jpg" alt="Josh Thyng" className="profile-pic" />
          <h2>Computer Science Student</h2>
          <p>Welcome to my portfolio website! Explore my projects, skills, and experience.</p>
          <div className="hero-buttons">
            <a href="https://github.com/joshthyng777" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.kaggle.com/joshthyng" target="_blank" rel="noreferrer">Kaggle</a>
            <a href="https://www.linkedin.com/in/josh-thyng-a29610263/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Sections container */}
      <main className="container">
        <section id="skills" className="section" data-aos="fade-up">
          <h2>Skills</h2>
          <p>Python, SQL, Java, Data Analysis, Deep Learning, Computer Vision, Bash, Technical Writing, Excel, Tableau</p>
        </section>
        <section className="section" id="tech-stack">

          <h2>Tech Stack</h2>
          <div className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="Azure SQL" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="Java" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" alt="Bash" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain.svg" alt="NumPy" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" alt="Jupyter" />

          </div>
        </section>


        <section id="projects" className="section">
          {/* AOS trigger div required here to avoid rendering bug */}
          <div data-aos="fade-up"></div>

          <div data-aos="fade-up"></div>
          <h2>Projects</h2>
          <p>Here are some of my GitHub projects. More coming soon!</p>
          <div className="project-grid">
            {/* Project Cards */}
            <div className="project-card">
              <h3>Heart Failure Data Analysis</h3>
              <p>A project analyzing heart failure clinical records...</p>
              <a href="https://github.com/joshthyng777/heart_failure_data" target="_blank" rel="noreferrer" className="project-link">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Sports Classification</h3>
              <p>A machine learning project classifying sports data...</p>
              <a href="https://github.com/joshthyng777/sports-classification" target="_blank" rel="noreferrer" className="project-link">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Linear Regression on McDonald's Data</h3>
              <p>Explores the relationship between calorie content and nutritional values...</p>
              <a href="https://github.com/joshthyng777/linear-regression-McDonalds" target="_blank" rel="noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>
        </section>

        <section id="resume" className="section">
          {/* AOS trigger div required here to avoid rendering bug */}
          <div data-aos="fade-up"></div>
          <h2>Resume</h2>
          <div className="pdf-viewer">
            <iframe
              src="/job_app.pdf"
              width="100%"
              height="800px"
              title="Josh Thyng Resume"
              style={{ border: "1px solid #30363d", borderRadius: "8px" }}
            ></iframe>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <div className="about-container">
            <img src="/pfp.jpg" alt="Josh Thyng" className="about-pic" />
            <p>
              I’m Josh Thyng — a passionate Computer Science student with a deep interest in data science, machine learning, and building real-world solutions that make an impact. <br />
              <br />
              Whether it's analyzing complex datasets or creating intuitive interfaces, I’m always eager to learn and grow.
            </p>
          </div>
        </section>


        <section id="contact" className="section">
          {/* AOS trigger div required here to avoid rendering bug */}
          <div data-aos="fade-up"></div>
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:joshthyng187@gmail.com">joshthyng187@gmail.com</a></p>
        </section>
      </main>

      {/* Footer outside container */}
      <footer>
        <p>© {new Date().getFullYear()} Josh Thyng. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

