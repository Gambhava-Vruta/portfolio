import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, MapPin, ExternalLink, Code2, Monitor, Database, Award, BookOpen, Briefcase } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '1rem 0', background: 'var(--navbar-bg)', backdropFilter: 'blur(10px)', zIndex: 100, borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>VG.</div>
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#experience">Experience</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
            <li>
              <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'var(--text-color)', cursor: 'pointer' }}>
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section id="home" className="container animate-fade-in" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>Hi, my name is</h2>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '0 0 1rem 0', lineHeight: 1.1 }}>Vruta Gambhava.</h1>
          <h2 style={{ fontSize: '3rem', fontWeight: 600, color: '#8892b0', margin: '0 0 2rem 0' }}>Full Stack Developer & AI Enthusiast.</h2>
          <p style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '3rem', color: 'var(--text-color)', opacity: 0.8 }}>
            I build exceptional and accessible digital experiences. From scalable web applications to robust backend services and intelligent AI solutions, I turn complex problems into elegant code.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>Check out my Projects</a>
            <a href="#contact" className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>Get in Touch</a>
            <a href="#" className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>Resume</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-card">
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Code2 size={40} className="text-accent" /> About Me
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
              <div>
                <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                  Hello! I'm Vruta, a passionate developer who enjoys creating things that live on the internet. My interest in software development spans both cutting-edge Full Stack web technologies and the fascinating realm of Artificial Intelligence and Machine Learning.
                </p>
                <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                  With over <strong>230+ problems solved on LeetCode</strong>, I have a strong foundation in Data Structures and Algorithms, ensuring that the applications I build are not only visually engaging but performant and scalable.
                </p>
                <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Here are a few technologies I've been working with recently:</p>
                <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {['HTML & CSS', 'JavaScript (ES6+)', 'React', 'Node.js', '.NET', 'Flutter', 'MongoDB', 'MySQL'].map(skill => (
                    <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-accent">▹</span> {skill}</li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="glow-effect" style={{ width: '300px', height: '300px', backgroundColor: 'var(--primary)', borderRadius: '20px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -15, left: -15, width: '100%', height: '100%', border: '2px solid var(--accent)', borderRadius: '20px', zIndex: -1 }}></div>
                  <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--bg-color)', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                    <Monitor size={100} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Database size={40} className="text-accent" /> Featured Projects
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Cardio Disease Prediction',
                desc: 'A robust Machine Learning model designed to predict cardiovascular diseases accurately.',
                tech: ['Python', 'Scikit-Learn', 'Pandas'],
                github: 'https://github.com/Gambhava-Vruta',
                live: 'https://coming-soon.example.com/cardio'
              },
              {
                title: 'AI Study Assistant',
                desc: 'A Deep Learning and LLM-powered tool to help students summarize notes and generate quizzes.',
                tech: ['React', 'Python', 'LLM', 'FastAPI'],
                github: 'https://github.com/Gambhava-Vruta',
                live: 'https://coming-soon.example.com/ai-study'
              },
              {
                title: 'Propertia Real Estate App',
                desc: 'A comprehensive real estate platform with seamless property searches and user dashboards.',
                tech: ['.NET Core', 'React', 'SQL Server'],
                github: 'https://github.com/Gambhava-Vruta',
                live: 'https://coming-soon.example.com/propertia'
              },
              {
                title: 'Academic Projects (MERN)',
                desc: 'Developed multiple academic web applications like a Matrimonial App and a Book Buyer platform.',
                tech: ['MongoDB', 'Express', 'React', 'Node.js'],
                github: 'https://github.com/Gambhava-Vruta',
                live: null
              }
            ].map((p, i) => (
              <div key={i} className="glow-effect" style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '15px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <BookOpen size={40} className="text-primary" />
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub Link" style={{ color: 'var(--text-color)' }}><Github size={20} /></a>
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live Link" style={{ color: 'var(--text-color)' }}><ExternalLink size={20} /></a>}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{p.title}</h3>
                <p style={{ flexGrow: 1, marginBottom: '2rem', fontSize: '1rem', opacity: 0.8 }}>{p.desc}</p>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>
                  {p.tech.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Achievements */}
        <section id="experience" className="bg-card">
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Briefcase size={32} className="text-accent" /> Experience
              </h2>
              <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--primary)' }}>
                <div style={{ marginBottom: '2rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-2.45rem', top: 0, width: '15px', height: '15px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--text-color)' }}>Teaching Assistant</h3>
                  <p style={{ color: 'var(--accent)' }}>University Name</p>
                  <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Mentored students in core CS concepts, assisted in lab sessions, and graded assignments ensuring high academic standards.</p>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-2.45rem', top: 0, width: '15px', height: '15px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--text-color)' }}>Flutter Intern</h3>
                  <p style={{ color: 'var(--accent)' }}>Tech Company</p>
                  <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Developed cross-platform mobile applications using Flutter, integrated RESTful APIs, and collaborated with UI/UX teams.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Award size={32} className="text-accent" /> Achievements
              </h2>
              <div className="glow-effect" style={{ backgroundColor: 'var(--bg-color)', padding: '2rem', borderRadius: '15px', border: '1px solid var(--border-color)' }}>
                <Award size={50} className="text-primary" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>1st Rank in CodeArena</h3>
                <p style={{ opacity: 0.8 }}>Secured first place in the university-level competitive programming contest out of 500+ participants, demonstrating exceptional problem-solving and algorithmic skills.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get In Touch</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2rem' }}>
            I am currently open for new opportunities. Whether you have a question, a project to discuss, or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:vrutagambhva@gmail.com" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', marginBottom: '4rem', display: 'inline-block' }}>Say Hello</a>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="mailto:vrutagambhva@gmail.com" aria-label="Email" title="vrutagambhva@gmail.com" style={{ color: 'var(--text-color)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-color)'}><Mail size={24} /></a>
            <a href="https://github.com/Gambhava-Vruta" target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: 'var(--text-color)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-color)'}><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/vruta-gambhva-779b082a6/" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-color)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-color)'}><Linkedin size={24} /></a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
              <MapPin size={20} /> Rajkot, Gujarat, India
            </div>
          </div>
        </section>
      </main>
      
      <footer style={{ padding: '2rem 0', textAlign: 'center', fontSize: '0.9rem', opacity: 0.7, borderTop: '1px solid var(--border-color)' }}>
        <p>Built with React & Vite by Vruta Gambhava</p>
      </footer>
    </div>
  );
}
