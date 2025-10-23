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
          <img src="profilehani.jpeg" alt="Sofea Hani" width="100%" loading="lazy" />
          <div className="text">
            <h1 style={{ marginTop: '30px' }}>Hello Everyone, My Name is</h1>
            <h1 style={{ marginTop: '15px', color: 'rgb(216, 12, 87)' }}>Sofea Hani Binti Sharifudin</h1>
            <h2 style={{ marginTop: '15px' }}>I'm a computer science graduate specialized <br /> on software development,machine learning and data analytic </h2>
            <div className="buttons" style={{ marginTop: '30px' }}>
              <a href="RESUME SOFEA HANI BINTI SHARIFUDIN.pdf" download className="cv-btn">Download Resume</a>
              <a href="#contact" className="cv-btn">Contact</a>
            </div>
          </div>
        </div>
      </section>

{/* Skills Section */}
<section className="skills" id="skills">
  <h2 className="section-title" style={{ marginTop: '-30px' }}>Technical Skills</h2>
  <div
    className="skills-info"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      flexWrap: 'wrap'
    }}
  >
    {/* Technical Skills - Categorized Card Layout */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto 32px auto'
      }}
    >
      {[
        {
          title: 'Software Development',
          chips: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'PhpMyAdmin', 'Git & GitHub', 'React']
        },
        {
          title: 'Machine Learning & Data Science',
          chips: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'Keras', 'CNN']
        },
        {
          title: 'Analytics & Data Visualization',
          chips: ['Tableau','MySQL','Microsoft Excel', 'Looker Studio', 'Microsoft Clarity','MoEngage']
        }
      ].map((cat, i) => (
        <div
          key={i}
          style={{
            background: '#ffffff',
            border: '2px solid #d80c57',
            borderRadius: '14px',
            padding: '18px 22px',
            color: '#151111',
            boxShadow: '0 12px 30px rgba(2,6,23,0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <h3 style={{ margin: 0, color: '#d80c57', fontSize: '1.18rem', fontWeight: 700, fontStyle: 'italic', lineHeight: 1.05 }}>
            {cat.title}
          </h3>

          <div style={{ marginTop: '19px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {cat.chips.map(chip => (
              <span
                key={chip}
                style={{
                  background: '#d80c57',
                  color: '#fff',
                  borderRadius: '999px',
                  padding: '7px 14px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.03)'
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      ))} 

      {/* Soft Skills - Bottom */}
      <div
        style={{
          gridColumn: '1 / -1',      // span full grid width
          display: 'flex',
          justifyContent: 'center', // center inner container
          width: '100%',
          marginTop: '32px'         // <-- add gap between technical cards and soft skills
        }}
      >
         <div style={{ width: '100%', maxWidth: '600px' }}>
           <h2 style={{ marginBottom: '32px', color: '#d80c57', textAlign: 'center' }}>Soft Skills</h2>
           <div
             className="grid"
             style={{
               display: 'grid',
               gridTemplateColumns: 'repeat(3, 1fr)',
               gap: '24px'
             }}
           >
            {[
              { img: 'teamwork.png',title: 'Teamwork', desc: 'Able to work effectively in a team environment.' },
              { img: 'communication.png',title: 'Communication', desc: 'Strong written and verbal communication skills.' },
              { img: 'problemsolving.png',title: 'Problem Solving', desc: 'Adapt at analyzing and solving complex problems.' },
              { img: 'adaptation.png',title: 'Adaptability', desc: 'Quick to adapt to new technologies and environments.' },
              { img: 'time.png',title: 'Time Management', desc: 'Efficient in managing time and meeting deadlines.' },
              { img: 'emotional.png',title: 'Emotional Intelligence', desc: 'Ability to understand and manage emotions effectively.' },
            ].map((skill, index) => (
              <div className="grid-card" key={index} style={{ textAlign: 'center' }}>
                <img src={skill.img} alt={skill.title} style={{ width: '55px', height: '55px', marginBottom: '10px' }} /><br />
                <span>{skill.title}</span>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
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
            <img src="project1.jpeg" alt="Project X" style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block',margin: '0 auto' }} />
          </div>
          <div style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '8px 0 12px 0' , textAlign: 'left' }}>Traditional Malay Women Fashion Product Recommendation System</h3>
            <p style={{ fontSize: '1rem', marginBottom: '18px', color: '#d7085bff', textAlign: 'justify',wordSpacing: '1.5px' }}>
              Innovated a web based traditional malay women fashion product recommendation system aim to provide better recommendation for malay women  fashion product consist of baju kurung,baju kebaya and tudung using image based approach for Malay Women.
            </p>
            <div style={{ marginBottom: '18px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Python','CNN','Jupyter Notebook', 'Keras','Tensorflow','Scikit-learn'].map(tag => (
                <span key={tag} style={{ background: '#6d1936ff', color: '#fff', borderRadius: '8px', padding: '4px 10px', fontSize: '0.85rem' }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/SofeaHani/Recommendation-System" className="project-btn" style={{ background: '#c7015dff', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <img src="github.png" alt="GitHub" style={{ width: '20px', height: '20px', marginRight: '6px' }} /> View Project
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
            <p style={{ fontSize: '1rem', marginBottom: '18px', color: '#d7085bff', textAlign: 'justify' }}>
              Developed a web based customer complaint system that can help customers easily submit their complaints regarding products or services where customers can raise issues, track the progress of their complaints, and receive timely updates from the system.
            </p>
            <div style={{ marginBottom: '18px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Html','Css','Javascript','Bootstrap','jQuery','Php','PhpMyAdmin'].map(tag => (
                <span key={tag} style={{ background: '#6d1936ff', color: '#fff', borderRadius: '8px', padding: '4px 10px', fontSize: '0.85rem' }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/SofeaHani/Customer-Complaint-System" className="project-btn" style={{ background: '#c7015dff', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <img src="github.png" alt="GitHub" style={{ width: '20px', height: '20px', marginRight: '6px' }} /> View Project
              </a>
            </div>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="project-card modern-card" style={{ width: '400px', background: '#ffffffff', color: '#e72058ff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
          <div >
            <img src="Dashboard.jpeg" alt="Project X" style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '8px 0 12px 0' , textAlign: 'left' }}> Unifi Home Dashboard for Re-targeting Visitors</h3>
            <p style={{ fontSize: '1rem', marginBottom: '18px', color: '#d7085bff', textAlign: 'justify' }}>
              Designed 6 user-friendly visitor dashboards using Tableau and MySQL to monitor user behavior on a daily, weekly, and monthly basis for improving performance monitoring and decision-making.
            </p>
            <div style={{ marginBottom: '18px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Tableau','MySQL'].map(tag => (
                <span key={tag} style={{ background: '#6d1936ff', color: '#fff', borderRadius: '8px', padding: '4px 10px', fontSize: '0.85rem' }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://public.tableau.com/app/profile/sofea.hani/viz/RETARGETINGHOMEVISITORDASHBOARD/RETARGETINGHOMEVISITORDASHBOARD_4" className="project-btn" style={{ background: '#c7015dff', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <img src="tableau.png" alt="GitHub" style={{ width: '20px', height: '20px', marginRight: '6px' }} /> View Dashboard
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
        <div className="contact-hero">
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-cards">
          <div className="contact-card">
            <img src="email.png" alt="Email icon" style={{ width: 68, height: 68, objectFit: 'contain', marginBottom: 12 }} />
            <h3>Email</h3>
            <p className="muted">sofeahani02@gmail.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon location">📍</div>
            <h3>Location</h3>
            <p className="muted">Shah Alam, Malaysia</p>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Ready to Get Started?</h3>
          <p className="cta-sub">
            Whether you're want to discuss potential opportunities, I'd love to hear from you.
          </p>
          <a className="contact-btn" href="mailto:sofeahani02@gmail.com">
            ✉ Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}

export default App;

