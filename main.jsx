import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Moon, Sun, Code2, Database, Globe, GraduationCap, BriefcaseBusiness,
  ExternalLink, Download, Sparkles, Terminal, Layers3, ShieldCheck, FileText,
  UserRound, Send, MapPin, CalendarDays, CheckCircle2, ChevronUp
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Anupriya Rajput",
  title: "Aspiring Full-Stack Web Developer",
  email: "your.email@example.com", // Replace with your email
  github: "https://github.com/yourusername", // Replace with your GitHub URL
  linkedin: "https://www.linkedin.com/in/yourusername/", // Replace with your LinkedIn URL
  resume: "/Anupriya-Rajput-Resume.pdf" // Add your resume PDF to the public folder
};

const projects = [
  {
    number: "01", title: "Agentic Shield", subtitle: "AI-Powered Code Security Workspace",
    description: "An AI-powered code security workspace designed to analyze source code, identify potential vulnerabilities, suggest fixes, and verify corrected code.",
    tags: ["Python", "FastAPI", "React.js", "Docker", "AI"], icon: ShieldCheck,
    status: "Featured project", github: "", demo: ""
  },
  {
    number: "02", title: "Digital Document Manager", subtitle: "Smart document tracking & reminders",
    description: "A web application concept for organizing important documents and reminding users before expiry dates, helping them stay on top of renewals.",
    tags: ["HTML", "CSS", "JavaScript", "React.js"], icon: FileText,
    status: "Web application", github: "", demo: ""
  },
  {
    number: "03", title: "Student Login & Registration", subtitle: "Full-stack authentication system",
    description: "A student-focused application with registration, login, profile management, and database integration.",
    tags: ["React.js", "FastAPI", "Python", "SQLite"], icon: UserRound,
    status: "Full-stack project", github: "", demo: ""
  }
];

const skills = [
  { title: "Programming", icon: Code2, items: ["Python", "Java", "JavaScript"] },
  { title: "Frontend Development", icon: Globe, items: ["HTML5", "CSS3", "React.js", "Responsive Design", "UI Development"] },
  { title: "Backend & Data", icon: Database, items: ["FastAPI", "REST APIs", "SQLite", "Database Fundamentals"] },
  { title: "Tools & Foundations", icon: Terminal, items: ["Git", "GitHub", "VS Code", "OOP", "DSA", "Problem Solving"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  const nav = ["Home", "About", "Education", "Skills", "Projects", "Experience", "Contact"];
  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={dark ? "site dark" : "site light"}>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A<span>.</span></span><span>ANUPRIYA<span className="brand-muted"> RAJPUT</span></span></a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-btn" aria-label="Toggle color theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
          <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
          <div className="hero-content">
            <div className="eyebrow"><span className="status-dot"></span> OPEN TO LEARNING & OPPORTUNITIES</div>
            <h1>Hi, I'm <span className="gradient-text">Anupriya</span><br/>Rajput<span className="accent-dot">.</span></h1>
            <div className="role-line"><span className="role-bar"></span>{profile.title} <span className="role-divider">|</span> MCA Student</div>
            <p className="hero-copy">I enjoy turning ideas into thoughtful digital experiences — from intuitive user interfaces to the logic that powers them. I'm building my skills across the full stack, one project at a time.</p>
            <div className="hero-buttons">
              <a className="btn btn-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer"><Download size={17}/> View resume</a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19}/></a>
              <span className="social-caption">CONNECT WITH ME</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
            <div className="profile-card">
              <div className="profile-top"><span>PORTFOLIO / 2026</span><span className="live-dot"></span></div>
              <div className="avatar-placeholder"><div className="avatar-ring"><UserRound size={72} strokeWidth={1}/></div><span className="avatar-spark"><Sparkles size={18}/></span></div>
              <div className="profile-name">Anupriya Rajput</div>
              <div className="profile-role">FULL-STACK WEB DEVELOPMENT</div>
              <div className="profile-divider"></div>
              <div className="mini-stats"><div><strong>03</strong><span>PROJECTS</span></div><div><strong>2028</strong><span>GRADUATION</span></div><div><strong>∞</strong><span>IDEAS</span></div></div>
              <div className="code-float"><span className="code-green">const</span> <span className="code-purple">passion</span> = <span className="code-yellow">"build"</span>;</div>
            </div>
            <div className="floating-chip chip-react"><Layers3 size={15}/> React.js</div>
            <div className="floating-chip chip-python"><Code2 size={15}/> Python</div>
          </div>
          <a href="#about" className="scroll-hint"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-kicker reveal">01 / ABOUT ME</div>
          <div className="about-grid">
            <div className="reveal"><h2>Curious mind.<br/><span className="gradient-text">Builder's mindset.</span></h2></div>
            <div className="about-copy reveal"><p className="lead">I'm an MCA student and aspiring Full-Stack Web Developer who loves learning how great digital products are built.</p><p>My journey combines a foundation in computer science with hands-on exploration of programming and web technologies. I enjoy working on the visual side of an application as much as understanding the logic and data behind it.</p><p>I'm continuously improving my skills in Python, JavaScript, React.js, and backend development while creating practical projects that solve everyday problems.</p><div className="about-note"><Sparkles size={18}/><span>Always learning. Always building. Always improving.</span></div></div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-kicker reveal">02 / EDUCATION</div>
          <div className="section-heading reveal"><h2>My learning <span className="gradient-text">journey.</span></h2><p>The academic foundation behind my development journey.</p></div>
          <div className="timeline">
            <div className="timeline-item reveal"><div className="timeline-marker"><GraduationCap size={20}/></div><div className="timeline-card"><div className="timeline-meta"><span>POSTGRADUATE</span><span className="date"><CalendarDays size={14}/> 2026 — 2028</span></div><h3>Master of Computer Applications (MCA)</h3><p className="institution">Kite University · Ghaziabad, Uttar Pradesh</p><p>Focused on strengthening my understanding of computer applications, software development, and modern computing technologies.</p><span className="current-tag">Currently pursuing</span></div></div>
            <div className="timeline-item reveal"><div className="timeline-marker"><GraduationCap size={20}/></div><div className="timeline-card"><div className="timeline-meta"><span>UNDERGRADUATE</span><span className="date"><CalendarDays size={14}/> Completed 2025</span></div><h3>Bachelor of Science (B.Sc.)</h3><p className="institution">SBD College · Dhampur, Uttar Pradesh</p><p>Built an academic foundation that encouraged analytical thinking and an interest in technology.</p><span className="completed-tag"><CheckCircle2 size={13}/> Completed</span></div></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-kicker reveal">03 / TECHNICAL SKILLS</div>
          <div className="section-heading reveal"><h2>Tools of my <span className="gradient-text">trade.</span></h2><p>Technologies I'm learning and using to bring ideas to life.</p></div>
          <div className="skills-grid">
            {skills.map((group, i) => { const Icon = group.icon; return <article className="skill-card reveal" key={group.title}><div className="skill-card-top"><div className="skill-icon"><Icon size={21}/></div><span>0{i+1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}
          </div>
          <p className="skills-footnote"><span className="status-dot"></span> Skill set is continuously growing through practice and projects.</p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-kicker reveal">04 / SELECTED PROJECTS</div>
          <div className="section-heading projects-heading reveal"><div><h2>Ideas turned into <span className="gradient-text">projects.</span></h2><p>A selection of applications I've worked on and explored.</p></div><span className="project-count">03 / 03</span></div>
          <div className="projects-list">
            {projects.map((project) => { const Icon = project.icon; return <article className="project-card reveal" key={project.number}><div className="project-number">{project.number}</div><div className="project-icon"><Icon size={25}/></div><div className="project-main"><div className="project-status">{project.status}</div><h3>{project.title}</h3><h4>{project.subtitle}</h4><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-links">{project.github ? <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository"><Github size={18}/></a> : <span className="link-placeholder" title="Add GitHub URL in src/main.jsx"><Github size={18}/></span>}{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo"><ExternalLink size={18}/></a> : <span className="link-placeholder" title="Add live demo URL in src/main.jsx"><ExternalLink size={18}/></span>}</div></article>; })}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-kicker reveal">05 / EXPERIENCE & HIGHLIGHTS</div>
          <div className="section-heading reveal"><h2>Growing through <span className="gradient-text">experience.</span></h2><p>Learning beyond the classroom and building confidence through participation.</p></div>
          <div className="experience-grid">
            <article className="experience-card reveal"><div className="experience-icon"><BriefcaseBusiness size={21}/></div><div><span className="experience-label">INTERNSHIP EXPERIENCE</span><h3>Winter Internship</h3><p>Hands-on learning experience. Add the organization, role, dates, and key contributions here.</p><span className="edit-hint">Details to be updated</span></div></article>
            <article className="experience-card reveal"><div className="experience-icon"><BriefcaseBusiness size={21}/></div><div><span className="experience-label">INTERNSHIP EXPERIENCE</span><h3>Summer Internship</h3><p>Professional learning experience. Add the organization, role, dates, and key contributions here.</p><span className="edit-hint">Details to be updated</span></div></article>
            <article className="experience-card reveal"><div className="experience-icon"><Sparkles size={21}/></div><div><span className="experience-label">TECHNICAL EVENT</span><h3>InnoTech 26</h3><p>Participated in a technology event and explored innovation, collaboration, and project development.</p><span className="edit-hint">Participation</span></div></article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-kicker reveal">06 / GET IN TOUCH</div>
          <div className="contact-grid">
            <div className="contact-copy reveal"><h2>Have an idea?<br/><span className="gradient-text">Let's connect.</span></h2><p>I'm open to conversations about internships, entry-level opportunities, collaborations, and learning from people in tech. Feel free to reach out.</p><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18}/>{profile.email}<ArrowUpRight size={16}/></a><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div></div>
            <form className="contact-form reveal" onSubmit={handleSubmit}><div className="form-title">Send a message <Send size={17}/></div><label>Your name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Enter your name"/></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@example.com"/></label><label>Your message<textarea required rows="4" value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell me a little about what you have in mind..."/></label><button className="btn btn-primary submit-btn" type="submit">Send via email <ArrowUpRight size={17}/></button><span className="form-note">This opens your email app with your message prepared.</span></form>
          </div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>ANUPRIYA<span className="brand-muted"> RAJPUT</span></span></a><span>Designed & built with curiosity <span className="footer-heart">✦</span></span><span>© {new Date().getFullYear()} Anupriya Rajput</span></footer>
      {showTop && <button className="back-top" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} aria-label="Back to top"><ChevronUp size={19}/></button>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
