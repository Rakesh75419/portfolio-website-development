'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Mail,
  Menu,
  Play,
  Send,
  X,
} from 'lucide-react'

const skillGroups = [
  { label: 'Programming', items: ['Core Java', 'JavaScript', 'HTML', 'CSS'] },
  { label: 'Frontend', items: ['React.js', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js'] },
  { label: 'Database', items: ['MongoDB'] },
  { label: 'Automation Testing', items: ['Selenium WebDriver', 'Playwright', 'TestNG', 'Cucumber', 'Maven', 'Page Object Model'] },
  { label: 'API Testing', items: ['REST Assured', 'Postman', 'JSON validation', 'REST APIs'] },
  { label: 'Tools', items: ['Jenkins', 'Git', 'GitHub', 'Docker', 'Jira', 'CircleCI'] },
]

const projects = [
  { title: 'Weather Forecast App', category: 'Development', description: 'A focused weather experience for quickly checking conditions and forecasts.', tags: ['React.js', 'API', 'CSS'], accent: 'sky' },
  { title: 'Amazon Clone UI', category: 'Development', description: 'A responsive e-commerce interface exploring product discovery and cart flows.', tags: ['React.js', 'Tailwind CSS'], accent: 'violet' },
  { title: 'QuickMart Grocery Shop', category: 'Development', description: 'A clean grocery shopping concept built around simple, intuitive browsing.', tags: ['MERN', 'MongoDB'], accent: 'mint' },
  { title: 'Portfolio Website', category: 'Development', description: 'A recruiter-friendly personal portfolio with a clear, editorial visual system.', tags: ['Next.js', 'Tailwind CSS'], accent: 'amber' },
  { title: 'Selenium Automation Framework', category: 'Testing', description: 'A maintainable UI automation foundation organized with reusable page objects.', tags: ['Java', 'Selenium', 'TestNG'], accent: 'blue' },
  { title: 'Playwright Automation Framework', category: 'Testing', description: 'A modern browser testing setup designed for fast, reliable test feedback.', tags: ['Playwright', 'JavaScript'], accent: 'rose' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState('All')
  const [sent, setSent] = useState(false)
  const filteredProjects = useMemo(() => projectFilter === 'All' ? projects : projects.filter((project) => project.category === projectFilter), [projectFilter])

  const nav = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Rakesh Kumar home"><span>RK</span><b>Rakesh Kumar</b></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
          <h1>Building quality<br /><em>into every line.</em></h1>
          <p className="hero-lede">Hi, I&apos;m <strong>Rakesh Kumar</strong> — a QA Automation Engineer who turns thoughtful test strategy into dependable digital experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View my projects <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#contact">Contact me <Mail size={17} /></a></div>
          <div className="hero-meta"><span><strong>2.9</strong> years experience</span><span className="meta-line" /><span>QA automation <span className="muted">/</span> MERN</span></div>
        </div>
        <div className="hero-art" aria-label="Profile graphic placeholder">
          <div className="grid-lines" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="profile-card"><div className="profile-avatar">RK</div><div><span className="card-kicker">PROFILE / 01</span><strong>Quality first.</strong><small>Code with intent.</small></div></div>
          <div className="floating-code code-one"><Code2 size={16} /><span>test<span className="blue-text">{`()`}</span> {`{`}</span></div>
          <div className="floating-code code-two"><Check size={15} /><span>build <span className="blue-text">✓ passed</span></span></div>
          <div className="hero-portrait"><div className="portrait-glow" /><span className="portrait-initials">RK</span><span className="portrait-label">QA / DEV</span></div>
        </div>
      </section>

      <div className="ticker"><div className="ticker-track"><span>QUALITY ENGINEERING</span><i>✦</i><span>WEB DEVELOPMENT</span><i>✦</i><span>CONTINUOUS IMPROVEMENT</span><i>✦</i><span>QUALITY ENGINEERING</span><i>✦</i><span>WEB DEVELOPMENT</span></div></div>

      <section className="section-wrap split-section" id="about"><div className="section-label">01 / About me</div><div className="split-content"><div><h2>Curious by nature.<br /><span>Precise by craft.</span></h2></div><div className="about-body"><p className="large-copy">I care about the details that make software feel effortless.</p><p>With 2.9 years in QA Automation, I work across the full quality lifecycle — from test case design and functional testing to building scalable automation frameworks and validating APIs. My MERN stack knowledge helps me think beyond a single layer and collaborate closely with developers.</p><a className="text-link" href="#experience">More about my experience <ArrowUpRight size={16} /></a></div></div></section>

      <section className="section-wrap skills-section" id="skills"><div className="section-label">02 / Toolkit</div><div className="section-heading"><h2>Tools of the trade.</h2><p>A practical toolkit for building, testing, and shipping with confidence.</p></div><div className="skills-grid">{skillGroups.map((group, index) => <div className={`skill-card skill-${index}`} key={group.label}><span className="skill-number">0{index + 1}</span><h3>{group.label}</h3><div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>

      <section className="experience-band" id="experience"><div className="section-wrap experience-content"><div className="section-label light-label">03 / Experience</div><div className="experience-main"><div><span className="date-pill">CURRENT FOCUS</span><h2>QA Automation<br /><em>Engineer</em></h2></div><div className="experience-info"><p className="large-copy">2.9 years of making software more reliable.</p><p>Focused on UI automation, API testing, functional testing, regression testing, smoke testing, test case design, and automation framework development.</p><div className="experience-tags"><span>Selenium</span><span>Playwright</span><span>REST Assured</span><span>Jenkins</span></div></div></div></div></section>

      <section className="section-wrap projects-section" id="projects"><div className="section-label">04 / Selected work</div><div className="section-heading projects-heading"><div><h2>Things I&apos;ve built.</h2><p>Projects that sit at the intersection of curiosity and craft.</p></div><div className="filter-tabs" role="group" aria-label="Filter projects">{['All', 'Development', 'Testing'].map((filter) => <button className={projectFilter === filter ? 'active' : ''} key={filter} onClick={() => setProjectFilter(filter)}>{filter}</button>)}</div></div><div className="projects-grid">{filteredProjects.map((project, index) => <article className={`project-card accent-${project.accent}`} key={project.title}><div className="project-visual"><span>0{index + 1}</span><div className="visual-mark"><Play size={18} fill="currentColor" /></div><a href="#contact" aria-label={`View ${project.title} project`}><ExternalLink size={16} /></a></div><div className="project-details"><span className="project-type">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact">GitHub <ArrowUpRight size={14} /></a></div></div></article>)}</div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-wrap"><div className="section-label light-label">05 / Say hello</div><div className="contact-grid"><div><h2>Let&apos;s make<br /><em>something great.</em></h2><p className="contact-copy">Whether you have a question, an opportunity, or just want to connect — my inbox is open.</p><a className="email-link" href="mailto:rakeshkumar06560@gmail.com">rakeshkumar06560@gmail.com <ArrowUpRight size={18} /></a><div className="socials"><a href="#contact" aria-label="LinkedIn profile placeholder">in</a><a href="#contact" aria-label="GitHub profile placeholder"><Code2 size={18} /></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>{sent ? <div className="form-success"><Check size={28} /><h3>Thanks for reaching out.</h3><p>Your message is ready to be connected to an inbox.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Send another message</button></div> : <><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows={4} placeholder="Tell me a little about your project..." /></label><button className="button button-light" type="submit">Send message <Send size={16} /></button></>}</form></div></div></section>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span>RK</span><b>Rakesh Kumar</b></a><p>Designed &amp; built with intention.</p><div><a href="#home">Back to top <ChevronDown size={15} className="rotate" /></a></div></footer>
    </main>
  )
}
