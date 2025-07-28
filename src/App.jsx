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
          <img src="HANI PORTFOLIO.jpeg" alt="Sofea Hani" width="100%" loading="lazy" />
          <div className="text">
            <h1 style={{ marginTop: '30px' }}>Hello, My Name is</h1>
            <h1 style={{ marginTop: '15px', color: 'rgb(216, 12, 87)' }}>Sofea Hani Binti Sharifudin</h1>
            <h2 style={{ marginTop: '15px' }}>I'm a computer science graduate specialized <br /> on software development and machine learning </h2>
            <div className="buttons" style={{ marginTop: '30px' }}>
              <a href="RESUME SOFEA HANI BINTI SHARIFUDIN.pdf" download className="cv-btn">Download Resume</a>
              <a href="#contact" className="cv-btn">Contact</a>
            </div>
          </div>
        </div>
      </section>

{/* Skills Section */}
<section className="skills" id="skills">
  <h2 className="section-title" style={{ marginTop: '-30px' }}>Skills</h2>
  <div
    className="skills-info"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '40px',
      flexWrap: 'wrap'
    }}
  >
    {/* Technical Skills - Left */}
    <div style={{ flex: 1, minWidth: '250px', marginBottom: '32px' }}>
      <h2 style={{ marginBottom: '32px', color: '#d80c57' }}>Technical Skills</h2>
      <div className="grid">
        {[
          { img: 'html.png', title: 'HTML' },
          { img: 'css.png', title: 'CSS' },
          { img: 'javascript.png', title: 'JavaScript' },
          { img: 'bootstrap.png', title: 'Bootstrap' },
          { img: 'react.png', title: 'React' },
          { img: 'git.png', title: 'Git & GitHub' },
          { img: 'php.png', title: 'Php' },
        ].map((skill, index) => (
          <div className="grid-card" key={index}>
            <img src={skill.img} alt={skill.title} style={{ width: '100px', height: '100px', marginBottom: '10px' }} /><br />
            <span>{skill.title}</span>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
    {/* Soft Skills - Right */}
    <div style={{ flex: 1, minWidth: '250px' }}>
      <h2 style={{ marginBottom: '32px', color: '#d80c57' }}>Soft Skills</h2>
      <div className="grid">
        {[
          { title: 'Teamwork', desc: 'Able to work effectively in a team environment.' },
          { title: 'Communication', desc: 'Strong written and verbal communication skills.' },
          { title: 'Problem Solving', desc: 'Adapt at analyzing and solving complex problems.' },
          { title: 'Adaptability', desc: 'Quick to adapt to new technologies and environments.' },
          { title: 'Time Management', desc: 'Efficient in managing time and meeting deadlines.' }
        ].map((skill, index) => (
          <div className="grid-card" key={index}>
            <img src={skill.img} alt={skill.title} style={{ width: '100px', height: '100px', marginBottom: '10px' }} /><br />
            <span>{skill.title}</span>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
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

      {/* Certificate Section */}
      <section className="certs" id="certs">
        <h2 className="section-title">Certificate</h2>
        <div className="cert-container">
          {/* Project Cards */}
          <div className="cert-card">
            <img src="ExploreGenerativeAI.jpeg" alt="Project X" />
            <h4 style={{ marginTop: '16px' }}>Microsoft Explore Generative AI <br /> Certificate</h4>
            <div className="buttons">
              <a href="EXPLORE GENERATIVE AI CERTIFICATE.pdf" className="cert-btn">Certificate</a>
            </div>
          </div>

          <div className="cert-card">
            <img src="MachineLearning.jpeg" alt="Project Y" />
            <h4 style={{ marginTop: '16px' }}>Getting Started with Machine Learning Algorithm <br /> Certificate</h4>
            <div className="buttons">
              <a href="MACHINE LEARNING CERTIFICATE SIMPLI LEARN.pdf" className="cert-btn">Certificate</a>
            </div>
          </div>

          <div className="cert-card">
            <img src="GraphicDesign.jpeg" alt="Project Z" />
            <h4 style={{ marginTop: '16px' }}>Introduction to Graphic Design Basic of UIUX <br /> Certificate</h4>
            <div className="buttons">
              <a href="GRAPHIC DESIGN Basic of UIUX Certificate.pdf" className="cert-btn">Certificate</a>
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

               