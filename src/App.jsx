import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header Section */}
      <header className="header">
        {/* Logo */}
        <div className="logo-container">
          <img src="flower2.png" alt="Logo" className="logo-img" />
          <a href="#" className="logo-text">Sofea Hani</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={toggleMenu}>☰</div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Social Links */}
        <div className="social-links" style={{ marginTop: '-15px' }}>
          <a href="https://github.com/sofeahani" target="_blank" rel="noopener noreferrer" className="visit-btn">
            <img src="github.png" alt="Github Logo" className="icon" /> Github
          </a>
          <a href="http://www.linkedin.com/in/sofea-hani-binti-sharifudin" target="_blank" rel="noopener noreferrer" className="visit-btn">
            <img src="linkedln.png" alt="LinkedIn Logo" className="icon" /> LinkedIn
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <img src="hani.jpg" alt="Sofea Hani" width="100%" loading="lazy" />
          <div className="text">
            <h1 style={{ marginTop: '30px' }}>Hello and Hi, My Name is</h1>
            <h1 style={{ marginTop: '15px', color: 'rgb(216, 12, 87)' }}>Sofea Hani Binti Sharifudin</h1>
            <h2 style={{ marginTop: '15px' }}>I'm a front-end developer with a <br /> passion for creating beautiful and functional websites</h2>
            <div className="buttons" style={{ marginTop: '30px' }}>
              <a href="RESUME SOFEA HANI BINTI SHARIFUDIN.pdf" download className="cv-btn">Download Resume</a>
              <a href="#contact" className="cv-btn">Contact</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2 className="section-title" style={{ marginTop: '-30px' }}>My Skills</h2>
        <div className="skills-info">
          <div className="grid">
            {[
              { title: 'HTML', desc: 'HTML is the standard markup language for creating web pages.' },
              { title: 'CSS', desc: 'CSS is the language we use to style an HTML document.' },
              { title: 'JavaScript', desc: 'JavaScript is the programming language of the Web.' },
              { title: 'Bootstrap', desc: 'Bootstrap is a framework for building responsive websites quickly.' },
              { title: 'React', desc: 'React is a JavaScript library for building user interfaces.' },
              { title: 'Git & GitHub', desc: 'Version control system for tracking changes in code.' },
              { title: 'UI/UX Design', desc: 'Designing user-friendly interfaces with a focus on experience.' }
            ].map((skill, index) => (
              <div className="grid-card" key={index}>
                <span>{skill.title}</span>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project-container">
          {/* Project Cards */}
          <div className="project-card">
            <img src="project1.jpeg" alt="Project X" />
            <h4>[Final Year Project] <br /> Traditional Malay Women Fashion Product Recommendation System Using CNN Deep Learning</h4>
            <p>Description Project 1</p>
            <div className="buttons">
              <a href="#" className="project-btn">Live Demo</a>
              <a href="https://github.com/SofeaHani/Recommendation-System" className="project-btn">Github Repo</a>
            </div>
          </div>

          <div className="project-card">
            <img src="project2.jpeg" alt="Project Y" />
            <h3>One Time Pad Cipher System</h3>
            <p>Description Project 2</p>
            <div className="buttons">
              <a href="#" className="project-btn">Live Demo</a>
              <a href="https://github.com/SofeaHani/One-Time-Pad-Cipher-System" className="project-btn">Github Repo</a>
            </div>
          </div>

          <div className="project-card">
            <img src="project3.jpeg" alt="Project Z" />
            <h3>Software Engineer Salary Prediction System</h3>
            <p>Description Project 3</p>
            <div className="buttons">
              <a href="#" className="project-btn">Live Demo</a>
              <a href="#" className="project-btn">Github Repo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title" style={{ marginBottom: '20px', marginTop: '30px' }}>Contact Me</h2>
        <form className="contact-form">
          <div className="input-container">
            <span className="email-icon">✉</span>
            <input type="email" placeholder="example@email.com" required />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
