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
    <div style={{ flex: 1, minWidth: '150px', marginBottom: '32px' }}>
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
          { img: 'phpmyadmin.png', title: 'PhpMyAdmin' },
          { img: 'python.png', title: 'Python' },
          { img: 'tensorflow.png', title: 'Tensorflow' },
          { img: 'keras.png', title: 'Keras' },
          { img: 'scikit-learn.png', title: 'Scikit Learn' },
        ].map((skill, index) => (
          <div className="grid-card" key={index}>
            <img src={skill.img} alt={skill.title} style={{ width: '55px', height: '55px', marginBottom: '10px' }} /><br />
            <span style={{ fontSize: '1.1rem' }}>{skill.title}</span>
            <p style={{ fontSize: '0.9rem' }}>{skill.desc}</p>
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
   <div className="project-container" style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
    {/* Project Card 1 */}
    <div className="project-card modern-card" style={{ width: '400px', background: '#ffffffff', color: '#e72058ff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
      <div >
        <img src="project1.jpeg" alt="Project X" style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '8px 0 12px 0' , textAlign: 'left' }}>Traditional Malay Women Fashion Product Recommendation System</h3>
        <p style={{ fontSize: '1rem', marginBottom: '18px', color: '#d7085bff', textAlign: 'left' }}>
          Developed a web based traditional malay women fashion product recommendation system aim to provide better recommendation for malay women  fashion product consist of baju kurung,baju kebaya and tudung using image based approach for Malay Women.
        </p>
        <div style={{ marginBottom: '18px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Python','CNN','Jupyter Notebook', 'Keras','Tensorflow','Scikit-learn'].map(tag => (
            <span key={tag} style={{ background: '#6d1936ff', color: '#fff', borderRadius: '8px', padding: '4px 10px', fontSize: '0.85rem' }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="https://github.com/SofeaHani/Recommendation-System" className="project-btn" style={{ background: '#c7015dff', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <img src="github.png" alt="GitHub" style={{ width: '20px', height: '20px', marginRight: '6px' }} /> Code
          </a>
        </div>
      </div>
    </div>
    {/* Project Card 2 */}
    <div className="project-card modern-card" style={{ width: '400px', background: '#ffffffff', color: '#e72058ff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
      <div >
        <img src="Customercomplaintsystem.jpeg" alt="Project X" style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '8px 0 12px 0' , textAlign: 'left' }}>Customer Complaint System</h3>
        <p style={{ fontSize: '1rem', marginBottom: '18px', color: '#d7085bff', textAlign: 'left' }}>
          Developed a web based customer complaint system that can help customers easily submit their complaints regarding products or services where customers can raise issues, track the progress of their complaints, and receive timely updates from the system.
        </p>
        <div style={{ marginBottom: '18px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Html','Css','Javascript','Bootstrap','jQuery','Php','PhpMyAdmin'].map(tag => (
            <span key={tag} style={{ background: '#6d1936ff', color: '#fff', borderRadius: '8px', padding: '4px 10px', fontSize: '0.85rem' }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="https://github.com/SofeaHani/Recommendation-System" className="project-btn" style={{ background: '#c7015dff', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <img src="github.png" alt="GitHub" style={{ width: '20px', height: '20px', marginRight: '6px' }} /> Code
          </a>
        </div>
      </div>
    </div>
    {/* Project Card 3 */}
    <div className="project-card modern-card" style={{ width: '400px', background: '#ffffffff', color: '#e72058ff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
      <div >
        <img src="Customercomplaintsystem.jpeg" alt="Project X" style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '8px 0 12px 0' , textAlign: 'left' }}>Customer Complaint System</h3>
        <p style={{ fontSize: '1rem', marginBottom: '18px', color: '#d7085bff', textAlign: 'left' }}>
          Developed a web based customer complaint system that can help customers easily submit their complaints regarding products or services where customers can raise issues, track the progress of their complaints, and receive timely updates from the system.
        </p>
        <div style={{ marginBottom: '18px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Html','Css','Javascript','Bootstrap','jQuery','Php','PhpMyAdmin'].map(tag => (
            <span key={tag} style={{ background: '#6d1936ff', color: '#fff', borderRadius: '8px', padding: '4px 10px', fontSize: '0.85rem' }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="https://github.com/SofeaHani/Recommendation-System" className="project-btn" style={{ background: '#c7015dff', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <img src="github.png" alt="GitHub" style={{ width: '20px', height: '20px', marginRight: '6px' }} /> Code
          </a>
        </div>
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

               