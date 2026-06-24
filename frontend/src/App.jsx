import { useState } from 'react'
import './App.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('about')

  const profile = {
    name: "DHAKKSHIN VM",
    title: "Electrical & Electronics Engineer",
    about: "An electronics systems learner who enjoys learning and building new things, a disciplined athlete with strong focus and teamwork, and a creative designer who communicates ideas clearly through visuals.",
    email: "dhakkshinvm.24eee@kongu.edu",
    phone: "+91 9952671069",
    linkedin: "https://www.linkedin.com/in/dhakkshin-murugaiyan-589a2734a",
    skills: [
      { name: "PCB Design", detail: "Ki-Cad", percentage: 90, degree: 324 },
      { name: "Circuit Analysis", detail: "LT Spice", percentage: 85, degree: 306 },
      { name: "IoT Operations", detail: "Basic Interfacing", percentage: 75, degree: 270 },
      { name: "Programming", detail: "Basic C", percentage: 70, degree: 252 }
    ],
    projects: [
      {
        title: "Low Flying Aircraft Detection System",
        tech: "SDR Receiver & Simulation",
        description: "Simulation of Low flying Aircraft Detection System using SDR Receiver."
      },
      {
        title: "IoT Remote Irrigation Control",
        tech: "IoT & Automation",
        description: "Remote control of irrigation Motor using IOT and implemented periodic run to stop dry run."
      }
    ],
    education: [
      {
        degree: "B.E. Electrical and Electronics Engineering",
        institution: "Kongu Engineering College",
        timeline: "Ongoing",
        metric: "CGPA: 8.36"
      },
      {
        degree: "Higher Secondary Schooling",
        institution: "Bharathi Vidhyalaya Sr. Sec. School",
        timeline: "2024",
        metric: "Percentage: 81%"
      }
    ],
    achievements: [
      "Award winner as the 'Best student for Curricular and Co-Curricular Activities' in year 2024-25.",
      "Gold Medalist in AUSB Zonal Basketball tournament for past 2 years (2024-25).",
      "Active member in Association of EEE-KEC."
    ]
  }

  return (
    <div className="deck-container">
      {/* Structural Background Lines */}
      <div className="grid-line line-1"></div>
      <div className="grid-line line-2"></div>

      {/* Persistent Technical Top Header */}
      <header className="tech-header">
        <div className="brand">PORTFOLIO // v2.06</div>
        <nav className="header-nav">
          {['about', 'skills', 'projects', 'education'].map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveSection(tab)}
              className={`header-link ${activeSection === tab ? 'active' : ''}`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </nav>
      </header>

      {/* 3D Isometric Viewport Presentation Stage */}
      <div className="deck-stage">
        
        {/* Main Presentation Card Node */}
        <div className="deck-card main-hero-card">
          <div className="card-glare"></div>
          <div className="card-inner">
            <span className="serial-tag">SYS_INIT // 024</span>
            <h1 className="hero-heading">
              Hello, I'm <span className="highlight-blue">{profile.name}</span>
            </h1>
            <p className="hero-subheading">{profile.title}</p>
            <p className="hero-desc">I design hardware and systems.</p>
            
            <div className="meta-footer">
              <span className="meta-item">E: {profile.email}</span>
              <span className="meta-item">P: {profile.phone}</span>
            </div>
          </div>
        </div>

        {/* Floating Context Panel Layer (Swaps Data dynamically based on header nav) */}
        <div className="deck-card reactive-panel-card">
          <div className="card-inner">
            
            {activeSection === 'about' && (
              <div className="panel-content">
                <h2 className="panel-title">Overview</h2>
                <p className="panel-text">{profile.about}</p>
                <div className="highlights-box">
                  <span className="sub-tag">CORE_METRICS</span>
                  <ul className="bullet-stack">
                    {profile.achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="panel-content">
                <h2 className="panel-title">Metrics & Competencies</h2>
                <div className="rings-layout-grid">
                  {profile.skills.map((skill, index) => (
                    <div className="ring-wrapper" key={index}>
                      <div className="circular-progress" style={{ '--data-deg': `${skill.degree}deg` }}>
                        <div className="inner-value">{skill.percentage}%</div>
                      </div>
                      <h4 className="ring-label">{skill.name}</h4>
                      <span className="ring-sub">{skill.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="panel-content">
                <h2 className="panel-title">Engineering Registries</h2>
                <div className="project-deck-stack">
                  {profile.projects.map((proj, index) => (
                    <div className="project-node" key={index}>
                      <div className="node-header">
                        <h3 className="node-title">{proj.title}</h3>
                        <span className="node-pill">{proj.tech}</span>
                      </div>
                      <p className="node-desc">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="panel-content">
                <h2 className="panel-title">Timeline Architecture</h2>
                <div className="education-deck-timeline">
                  {profile.education.map((edu, index) => (
                    <div className="timeline-node-card" key={index}>
                      <span className="node-date">{edu.timeline}</span>
                      <h3 className="node-degree">{edu.degree}</h3>
                      <p className="node-inst">{edu.institution}</p>
                      <span className="node-metric-badge">{edu.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}