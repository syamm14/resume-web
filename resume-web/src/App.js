import React, { useState, useEffect } from 'react';
import './App.css';
import resumePDF from './assets/SyamSundar-VITChennai.pdf';

<title>R. Syam Sundar</title>

function App() {
  // State to track which section is currently active in the viewport
  const [activeSection, setActiveSection] = useState('about');

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle contact form input changes
  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    const mailtoLink = `mailto:syamsundar70160@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setContactForm({
      name: '',
      email: '',
      message: ''
    });
  };

  // Handle phone call click
  const handlePhoneClick = () => {
    window.location.href = 'tel:+917227948037';
  };

  // Handle LinkedIn click
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/syam-sundar-3538462b7/', '_blank');
  };

  // Handle GitHub click
  const handleGitHubClick = () => {
    window.open('https://github.com/syamm14', '_blank');
  };

  // Scroll detection effect
  // Scroll detection effect
// Scroll detection effect - Debug version
useEffect(() => {
  const handleScroll = () => {
    const sections = ['about', 'education', 'experience', 'projects', 'skills', 'connect'];
    const scrollPosition = window.scrollY;
    
    console.log('Current scroll position:', scrollPosition); // Debug log

    let newActiveSection = 'about';

    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const elementTop = element.offsetTop - 150; // 150px offset for navbar
        
        console.log(`${sections[i]} starts at:`, elementTop); // Debug log
        
        if (scrollPosition >= elementTop) {
          newActiveSection = sections[i];
        }
      }
    }

    console.log('Active section should be:', newActiveSection); // Debug log
    
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
      console.log('Updated active section to:', newActiveSection); // Debug log
    }
  };

  handleScroll(); // Initial call
  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
}, [activeSection]);


  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get navbar height to offset the scroll position
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Find the previous divider element
      const prevDivider = element.previousElementSibling;
      let targetPosition;
      
      if (prevDivider && prevDivider.classList.contains('section-divider')) {
        // If there's a divider before this section, scroll to it
        targetPosition = prevDivider.offsetTop - navbarHeight;
      } else {
        // For the first section (about), scroll to the section itself
        targetPosition = element.offsetTop - navbarHeight;
      }
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">

      
{/* NAVIGATION BAR */}

      <nav className="navbar">
        <div className="nav-left" onClick={() => scrollToSection('about')}>
          R. Syam Sundar
        </div>
        <div className="nav-right">
          {['about', 'education', 'experience', 'projects', 'skills', 'connect'].map((section) => (
            <div
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
        </div>
      </nav>

{/* NAME DISPLAY */}

      <div className="name-below-nav">
        R. Syam Sundar
        <h4 className="subtitle">B.Tech CSE Student at VIT, Chennai</h4>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-link">
          resume
        </a>
      </div>

{/* ABOUT SECTION */}

      <section id="about" className="section about-section">
        <h2 className="section-heading-left">ABOUT ME</h2>
        <div className="section-content about-content">
          <p className="about-paragraph">
            I'm currently a 4th year student, open to work. My expertise includes <b>frontend engineering using ReactJS</b>. 
            I've also been part of projects that include Cloud Computing, e.g. Smart Bus Attendance System and Smart Analytic Rerouting in Autonomus Vehicles.
            My main interest is in <b>Artificial Intelligence</b>. I am currently working on Gen AI and my main focus is to increase my knowledge and develop skills in this domain. 
            I am fluent in multiple programming languages that are mainly used in the industry i.e. <b>Python, Java, C++, HTML, CSS, JavaScript, etc</b>.
            I have a significant amount of corporate experience as an intern at <b>Wipro, Tekafforde Solutions and Access CompuTech</b> that has helped me in building optimised solutions.
          </p>
          
          {/* Divider within About section */}
          <div className="about-divider"></div>
          
          {/* Three boxes container */}
          <div className="about-boxes-container">
            {/* Box 1 - Team Player */}
            <div className="about-box">
              <h3 className="about-box-title">Team Player</h3>
              <p className="about-box-content">
                Collaborative mindset with experience working in diverse teams to deliver successful projects.
              </p>
            </div>
            
            {/* Box 2 - Interest */}
            <div className="about-box">
              <h3 className="about-box-title">Interested Domains</h3>
              <p className="about-box-content">
                Deeply interested in AI, Machine Learning, and emerging technologies that solve real-world problems.
              </p>
            </div>
            
            {/* Box 3 - Passionate */}
            <div className="about-box">
              <h3 className="about-box-title">Passionate</h3>
              <p className="about-box-content">
                Highly motivated to learn new technologies and apply them to create innovative solutions.
              </p>
            </div>
          </div>

          {/* Contact info section */}
          <div className="contact-info-centered">
            <p><span className="contact-label">Email ID:</span> syamsundar70160@gmail.com</p>
            <p><span className="contact-label">Phone no.:</span> +91 7227948037</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

{/*EDUCATION SECTION*/}

      <section id="education" className="section education-section">
      <h2 className="section-heading-center">EDUCATION</h2>

      <div className="education-timeline">
  <div className="timeline-points">
    <div className="timeline-point">
      <div className="timeline-icon">
        {/* Pencil icon - using inline SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <path d="M11 11l5 5"></path>
        </svg>
      </div>
      <div className="timeline-content">
        <div className="timeline-year">2010-2022</div>
        <div className="timeline-school">
          <a href="https://nalandaschool.org/" target="_blank" rel="noopener noreferrer">
            Nalanda International School
          </a>
          <div className="timeline-location">Vadodara, Gujarat</div>

        </div>
        <div className="timeline-degree">ICSE</div>
      </div>
    </div>
    
    <div className="timeline-point">
      <div className="timeline-icon">
        {/* Pencil icon - using inline SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <path d="M11 11l5 5"></path>
        </svg>
      </div>
      <div className="timeline-content">
        <div className="timeline-year">2022-2026</div>
        <div className="timeline-school">
          <a href="https://chennai.vit.ac.in/" target="_blank" rel="noopener noreferrer">
            Vellore Institute of Technology
          </a>
          <div className="timeline-location">Chennai, Tamil Nadu</div>

        </div>
        <div className="timeline-degree">B.Tech in Computer Science</div>
      </div>
    </div>
  </div>
</div>


      </section>

      <div className="section-divider"></div>

{/* EXPERIENCE SECTION */}

<section id="experience" className="section experience-section">
  {/*<h2 className="section-heading-center">EXPERIENCE</h2>*/}
  <div className="section-content experience-content">
    
    {/* On-Site Experience */}
    <div className="experience-subsection">
      <h3 className="experience-subsection-title">On-Site Experience</h3>
      <div className="onsite-experiences">
        {/* Access Computech */}
        <div className="experience-box">
          <div className="experience-header">
            <h4 className="company-name">
              <a href="https://www.accesscomputech.com/" target="_blank" rel="noopener noreferrer">
                Access Computech Pvt. Ltd.
              </a>
            </h4>
            <p className="company-location">Vadodara, Gujarat</p>
            <p className="experience-duration">June 2024 - July 2024</p>
          </div>
          <ul className="experience-points">
            <li>Developed and maintained web applications using C#</li>
            <li>Collaborated with senior developers on client projects</li>
            <li>Participated in biometric product testing</li>
            <li>Gained hands-on experience in software development lifecycle</li>
          </ul>
        </div>

        {/* TekAfforde Solutions */}
        <div className="experience-box">
          <div className="experience-header">
            <h4 className="company-name">
              <a href="https://www.tekafforde.com/" target="_blank" rel="noopener noreferrer">
                TekAfforde Solutions Pvt. Ltd.
              </a>
            </h4>
            <p className="company-location">Bengaluru, Karnataka</p>
            <p className="experience-duration">May 2025 - June 2025</p>
          </div>
          <ul className="experience-points">
            <li>Learnt front-end engineering using ReactJS</li>
            <li>Worked on their application - <b>Fan4ever</b></li>
            <li>Collaborated with senior developers on the application</li>
            <li>Also created a resume website for myself using the knowledge gained here</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Virtual Experience */}
    <div className="experience-subsection">
      <h3 className="experience-subsection-title">Virtual Experience</h3>
      <div className="virtual-experiences">
        {/* Wipro Virtual Internship */}
        <div className="experience-box">
          <div className="experience-header">
            <h4 className="company-name">Virtual Internship at Wipro - AI Domain</h4>
            <p className="experience-duration">June 2025 - Present</p>
          </div>
          <ul className="experience-points">
            <li>Learnt Python in the 1st month.</li>
            <li>Going to work on minor and major projects based on AI models.</li>
            <li>Learning advanced AI concepts and industry best practices</li>
            <li>Learning the working of different ML models.</li>
          </ul>
        </div>
      </div>
    </div>

        {/* College Experience */}
        <div className="experience-subsection">
      <h3 className="experience-subsection-title">College Experience</h3>
      <div className="college-experiences">

        <div className="college-experiences-row">
          {/* Modern Popular Culture Club */}
          <div className="experience-box">
            <div className="experience-header">
              <h4 className="company-name">
                President of the <a href="https://www.instagram.com/popculture.vitc?utm_source=ig_web_button_share_sheet&igsh=MXZubGE0N24yOHhjcA==" target="_blank" rel="noopener noreferrer">
                  Modern Popular Culture Club, VITC
                </a>
              </h4>
              <p className="experience-duration">2024 - 2025</p>
            </div>
            <ul className="experience-points">
              <li>Led a team of 60+ members in organizing cultural events and activities</li>
              <li>Organised events with over 120+ participants</li>
              <li>Increased club membership by 40% through innovative engagement strategies</li>
              <li>Managed club budget and resources effectively</li>
            </ul>
          </div>

          {/* Event Managers Club */}
          <div className="experience-box">
            <div className="experience-header">
              <h4 className="company-name">
                Volunteer for the <a href="https://www.instagram.com/emcvitcc?utm_source=ig_web_button_share_sheet&igsh=MW5vcXV6eHUzd2cxMQ==" target="_blank" rel="noopener noreferrer">
                  Event Managers Club, VITC
                </a>
              </h4>
              <p className="experience-duration">2023 - 2024</p>
            </div>
            <ul className="experience-points">
              <li>Assisted in planning and executing college events during "Vibrance"</li>
              <li>Managed crowd control and logistics during events</li>
              <li>Developed strong organizational and time management skills</li>
              <li>Collaborated with multiple departments for seamless event execution</li>
            </ul>
          </div>
        </div>

        <div className="college-experiences-row">
          {/* Enactus Club */}
          <div className="experience-box">
            <div className="experience-header">
              <h4 className="company-name">
                Member of the <a href="https://www.instagram.com/enactusvitc?utm_source=ig_web_button_share_sheet&igsh=cjFpb3hydXNnb3pu" target="_blank" rel="noopener noreferrer">
                  Enactus Club, VITC
                </a>
              </h4>
              <p className="experience-duration">2023 - 2024</p>
            </div>
            <ul className="experience-points">
              <li>Member of the <b>Content and Design department</b></li>
              <li>Created content and designed posters for the club's social media pages</li>
              <li>Collaborated with NGOs and government agencies on community projects</li>
            </ul>
          </div>

          {/* Code Chef Chapter */}
          <div className="experience-box">
            <div className="experience-header">
              <h4 className="company-name">
                Member of the <a href="https://www.instagram.com/codechef.vitc?utm_source=ig_web_button_share_sheet&igsh=MWJiYTNjeXFvMzloOA==" target="_blank" rel="noopener noreferrer">
                  Code Chef Chapter, VITC
                </a>
              </h4>
              <p className="experience-duration">2024 - 2025</p>
            </div>
            <ul className="experience-points">
              <li>Member of the <b>Event Managenent department</b></li>
              <li>Organized coding workshops and training sessions for junior students</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<div className="section-divider"></div>



{/* PROJECTS SECTION */}

      {/* PROJECTS SECTION */}

      <section id="projects" className="section projects-section">
        <h2 className="section-heading-center">PROJECTS</h2>
        <div className="section-content projects-content">
          
          {/* Three project boxes container */}
          <div className="projects-boxes-container">
            
            {/* Box 1 - Bus Attendance Tracking System */}
            <div className="project-box">
              <h3 className="project-box-title">Bus Attendance Tracking System Using Fog and Edge Computing and Data Analytics</h3>
              <div className="project-technologies">
                <span className="tech-tag">ARDUINO</span>
                <span className="tech-tag">FIREBASE</span>
                <span className="tech-tag">PYTHON CSV</span>
                <span className="tech-tag">RFID SENSORS</span>
              </div>
              <ul className="project-box-content">
                <li>Developed an intelligent bus attendance system leveraging fog and edge computing for real-time data processing</li>
                <li>The system uses RFID sensors for automatic student identification and Firebase for cloud data storage</li>
                <li>Python CSV handling for data analytics and reporting</li>
              </ul>
            </div>
            
            {/* Box 2 - Autonomous Vehicle */}
            <div className="project-box">
              <h3 className="project-box-title">Autonomous Vehicle with Smart Analytic Rerouting</h3>
              <div className="project-technologies">
                <span className="tech-tag">ARDUINO</span>
                <span className="tech-tag">REACT JS</span>
                <span className="tech-tag">PYTHON</span>
              </div>
              <ul className="project-box-content">
                <li>Built an autonomous vehicle system with intelligent rerouting capabilities using real-time traffic analytics</li>
                <li>Arduino handles vehicle control and sensor integration, React JS provides the user interface for monitoring</li> 
                <li>Python processes routing algorithms for optimal path selection</li>
              </ul>
            </div>
            
            {/* Box 3 - NLP Clinical Trial Matching */}
            <div className="project-box">
              <h3 className="project-box-title">NLP in Clinical Trial Matching</h3>
              <div className="project-technologies">
                <span className="tech-tag">PYTHON</span>
                <span className="tech-tag">NLP</span>
                <span className="tech-tag">MACHINE LEARNING</span>
              </div>
              <ul className="project-box-content">
                <li>Implemented a Natural Language Processing solution for matching patients to appropriate clinical trials</li>
                <li>The system uses advanced NLP techniques to analyze patient records and trial criteria</li>
                <li>Provides accurate matching recommendations to improve clinical trial enrollment efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

{/* SKILLS SECTION */}

<section id="skills" className="section skills-section">
        <h2 className="section-heading-center">SKILLS</h2>
        <div className="section-content skills-content">
          
          {/* Skills subsections container */}
          <div className="skills-subsections-container">
            
            {/* Programming Languages */}
            <div className="skills-subsection">
              <div className="skills-subsection-header">
                <div className="skills-icon">
                  {/* Code icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16,18 22,12 16,6"></polyline>
                    <polyline points="8,6 2,12 8,18"></polyline>
                  </svg>
                </div>
                <h3 className="skills-subsection-title">Programming Languages</h3>
              </div>
              <div className="skills-tags-container">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C++</span>
              </div>
            </div>

            {/* Web Development */}
            <div className="skills-subsection">
              <div className="skills-subsection-header">
                <div className="skills-icon">
                  {/* Globe/Web icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="skills-subsection-title">Web Development</h3>
              </div>
              <div className="skills-tags-container">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">ReactJS</span>
              </div>
            </div>

            {/* Cloud */}
            <div className="skills-subsection">
              <div className="skills-subsection-header">
                <div className="skills-icon">
                  {/* Cloud icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <h3 className="skills-subsection-title">Cloud & Database</h3>
              </div>
              <div className="skills-tags-container">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">MySQL</span>
              </div>
            </div>

            {/* AI & ML */}
            <div className="skills-subsection">
              <div className="skills-subsection-header">
                <div className="skills-icon">
                  {/* Brain/AI icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                  </svg>
                </div>
                <h3 className="skills-subsection-title">AI & Machine Learning</h3>
              </div>
              <div className="skills-tags-container">
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">Generative AI</span>
                <span className="skill-tag">Prompt Engineering</span>
              </div>
            </div>

            {/* Other Important Topics */}
            <div className="skills-subsection">
              <div className="skills-subsection-header">
                <div className="skills-icon">
                  {/* Book/Academic icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 className="skills-subsection-title">Core Computer Science</h3>
              </div>
              <div className="skills-tags-container">
                <span className="skill-tag">Design and Analysis of Algorithms</span>
                <span className="skill-tag">Cryptography</span>
                <span className="skill-tag">Computer Networks</span>
                <span className="skill-tag">Object Oriented Programming</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      <div className="section-divider"></div>

{/* CONNECT SECTION */}

      {/* CONNECT SECTION */}

<section id="connect" className="section connect-section">
  <h2 className="section-heading-center">CONNECT</h2>
  <div className="section-content connect-content">
    
    {/* Contact Info Box */}
    <div className="contact-info-box">
      <h3 className="contact-box-title">Contact Me</h3>
      
      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleContactSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactForm.name}
            onChange={handleContactInputChange}
            required
            placeholder="Your Name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Mail ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactForm.email}
            onChange={handleContactInputChange}
            required
            placeholder="Your Email"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={contactForm.message}
            onChange={handleContactInputChange}
            required
            placeholder="Type your message"
            rows="4"
          />
        </div>
        
        <button type="submit" className="send-message-btn">
          Send Message
        </button>
      </form>
    </div>

    {/* Social Media Icons */}
    <div className="social-icons-container">
      <h3 className="social-icons-title">Get in Touch</h3>
      <div className="social-icons">
        
        

        {/* LinkedIn Icon */}
        <div className="social-icon" onClick={handleLinkedInClick} title="LinkedIn Profile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span className="social-label">LinkedIn</span>
        </div>

        {/* GitHub Icon */}
        <div className="social-icon" onClick={handleGitHubClick} title="GitHub Profile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span className="social-label">GitHub</span>
        </div>

        {/* Phone Icon */}
        <div className="social-icon" onClick={handlePhoneClick} title="Phone Call">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="social-label">Phone</span>
        </div>

      </div>
    </div>
    <div className="connect-bottom-padding"></div>
  </div>
</section>

    </div>
  );
}

export default App;
