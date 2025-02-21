import { Link } from 'react-router-dom';
import './aidenHome.css';
import aidenProfile from './AidenPFP.jpg'; // Make sure to import your image

function AidenHome() {
  return (
    <div className="portfolio-container">
      {/* Site Navigation */}
      <nav className="site-navigation">
        <Link to="/" className="home-link-box">Return to Home</Link>
      </nav>

      {/* PFP Section*/}
      <header className="aiden-pfp-section">
        <div className="profile-header">
          <img src={aidenProfile} alt="Aiden Dunaway" className="profile-image" />
          <h1>Aiden Dunaway</h1>
          <p className="profile-tagline">Aspiring DevOps Engineer | Cloud Enthusiast | Automation Advocate</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="portfolio-content">
        <section className="bio-section">
          <h2>About Me</h2>
          <p>
            Passionate about building scalable, reliable, and efficient systems. 
            Skilled in CI/CD pipelines, cloud infrastructure, and automation tools. 
            Eager to contribute to DevOps practices that streamline development and operations.
          </p>
        </section>

        <section className="projects-section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>CI/CD Pipeline for Microservices</h3>
              <p>Currently designing CI/CD pipeline for react application.</p>
            </div>
            <div className="project-card">
              <h3>Firewall</h3>
              <p>Utilized PFsense firewall to secure lab environments.</p>
            </div>
            <div className="project-card">
              <h3>Kubernetes Cluster Setup</h3>
              <p>Currently researching methods to deploy Kubernetes Cluster</p>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-list">
            <span className="skill-tag">CI/CD (Github Actions)</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">Infrastructure as Code (Ansible)</span>
            <span className="skill-tag">Containerization (Docker, Kubernetes)</span>
            <span className="skill-tag">Scripting (Bash, Python, Powershell)</span>
            <span className="skill-tag">Monitoring (Prometheus, Grafana)</span>
            <span className="skill-tag">Version Control (Git, GitHub)</span>
          </div>
        </section>

        <section className="contact-section">
          <h2>Connect With Me</h2>
          <div className="social-links">
            <a href="https://github.com/Mayanhunter187" target="_blank" rel="noopener noreferrer" className="social-button">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aiden-dunaway" target="_blank" rel="noopener noreferrer" className="social-button">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <p>&copy; 2025 Aiden Dunaway. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AidenHome;