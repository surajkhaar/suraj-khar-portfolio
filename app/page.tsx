"use client";

import { useEffect, useState } from "react";

const experience = [
  {
    role: "Technical Team Lead & Software Developer",
    company: "Pranayuv Technologies",
    period: "Oct 2025 – Apr 2026",
    bullets: [
      "Contributed to backend development of an internal enterprise application using Spring Boot and PostgreSQL",
      "Designed backend workflows with validation rules and state transitions",
      "Implemented transaction-safe business logic to ensure data consistency",
      "Developed and tested REST APIs supporting core application modules",
      "Collaborated on frontend development using React Native, integrating APIs and implementing UI components via Android Studio",
      "Resolved database integrity issues and performed end-to-end API testing",
    ],
  },
];

const projects = [
  {
    name: "API Sentinel – API Monitoring Platform",
    period: "2025",
    description: "Full-stack platform to monitor API health, uptime, latency and status codes with real-time dashboards and JWT auth.",
    tech: "React.js · FastAPI · PostgreSQL · JWT · Tailwind CSS",
    live: "https://drive.google.com/file/d/1xQ5qy3GThuzMfoNig9Ytbyk29vcNGh9L/view?usp=sharing",
    code: "https://github.com/surajkhaar",
  },
  {
    name: "Hospital Management System",
    period: "2025",
    description: "Role-based HMS with patient registration, appointments, prescriptions and billing. Secure auth for admin, doctors and patients.",
    tech: "React.js · Node.js · Express · MySQL · REST APIs",
    live: "https://drive.google.com/file/d/1cd6N5g4mSOhEPCdjB4uJytTgNsTgQo9R/view?usp=sharing",
    code: "https://github.com/surajkhaar",
  },
  {
    name: "AI Resume Screening Agent",
    period: "Oct 2024 – Nov 2024",
    description: "NLP-powered screening with match feedback and interactive Streamlit UI.",
    tech: "Python · NLP · Streamlit",
    live: "https://ai-resume-screening-agent-ju2skybe7mro2jpp4esryx.streamlit.app",
    code: "https://github.com/surajkhaar",
  },
  {
    name: "Heart Disease Prediction App",
    period: "Aug 2025 – Nov 2025",
    description: "FastAPI ML backend serving predictions to a Flutter client.",
    tech: "Python · FastAPI · ML",
    live: "#",
    code: "https://github.com/surajkhaar",
  },
  {
    name: "Online Voting System",
    period: "Mar 2024 – Dec 2024",
    description: "Role-based voting with secure auth and SQL-backed persistence.",
    tech: "Java · SQL",
    live: "#",
    code: "https://github.com/surajkhaar",
  },
  {
    name: "Weather Forecast Application",
    period: "Jul 2023 – Aug 2023",
    description: "API-driven weather app delivering real-time forecasts.",
    tech: "JavaScript · APIs",
    live: "#",
    code: "https://github.com/surajkhaar",
  },
];

const skills = [
  { label: "Languages", items: ["Java", "Python", "SQL"] },
  { label: "Backend & APIs", items: ["Spring Boot", "FastAPI", "REST"] },
  { label: "Web", items: ["React.js", "HTML", "CSS", "JavaScript"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "SQLite"] },
  { label: "Testing", items: ["JUnit", "Postman", "Debugging"] },
  { label: "Practices", items: ["Git", "GitHub", "SDLC", "Version Control"] },
  { label: "Core CS", items: ["DSA", "OOP", "Database Design"] },
  { label: "Tools", items: ["Streamlit", "Power BI", "VS Code"] },
];

const education = [
  {
    title: "B.E. Computer Engineering",
    org: "Visvesvaraya Technological University",
    period: "2022 – 2026",
    detail: "CGPA: 7.87 / 10",
  },
  {
    title: "Class XII",
    org: "2022",
    period: "",
    detail: "91%",
  },
  {
    title: "Class X",
    org: "2020",
    period: "",
    detail: "CGPA: 8.2",
  },
];

const certifications = [
  "Deloitte Australia Data Analytics Virtual Experience (Forage)",
  "Power BI Workshop – OM Office Master",
  "MongoDB Certification",
  "C Programming for Beginners",
  "Microsoft Office using AI",
  "GenAI Applications workshop · Microsoft Azure Cloud visit (JSSATEB)",
  "Internship Certificate – Pranayuv Technologies (Oct 2025 – Apr 2026)",
];

const links = {
  // Local PDF (downloads if present)
  resume: "/resume.pdf",
  // External resume viewer (opens in new tab). Paste your Google Drive link here.
 
  github: "https://github.com/surajkhaar",
  linkedin: "https://www.linkedin.com/in/suraj-khaar-53281a288",
  email: "mailto:surajkhaar@gmail.com",
  liveProject: "https://ai-resume-screening-agent-ju2skybe7mro2jpp4esryx.streamlit.app",
  phone: "tel:+917051657685",
};

const stats = [
  { label: "Backend focus", value: "Java · Python · Spring Boot" },
  { label: "APIs shipped", value: "REST · FastAPI · SQL" },
  { label: "Data layer", value: "PostgreSQL · MySQL · SQLite" },
];

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const typingRoles = [
  "Full Stack Developer",
  "Backend Engineer",
  "API Builder",
  "Tech Team Lead",
];

const skillCategoryGradients = [
  "from-violet-500 to-fuchsia-500",
  "from-blue-500 to-cyan-500",
  "from-cyan-500 to-teal-500",
  "from-emerald-500 to-lime-500",
  "from-orange-500 to-amber-500",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-sky-500",
  "from-teal-500 to-emerald-500",
];

const featuredProjectNames = new Set([
  "API Sentinel – API Monitoring Platform",
  "Hospital Management System",
]);

export default function Home() {
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typingRoles[roleIndex % typingRoles.length];
    const speed = isDeleting ? 55 : 110;

    const timer = window.setTimeout(() => {
      setTypedRole((prev) => {
        if (!isDeleting) {
          const nextText = currentRole.slice(0, prev.length + 1);
          if (nextText === currentRole) {
            window.setTimeout(() => setIsDeleting(true), 900);
          }
          return nextText;
        }

        const nextText = currentRole.slice(0, Math.max(0, prev.length - 1));
        if (nextText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % typingRoles.length);
        }
        return nextText;
      });
    }, speed);

    return () => window.clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -48px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-white/30 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
          <a href="#top" className="text-sm font-bold tracking-[0.18em] text-slate-900">
            SURAJ KHAR
          </a>
          <div className="flex flex-wrap items-center justify-end gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 sm:gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-1.5 transition-colors duration-150 hover:bg-white/70 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="top" className="hero-gradient relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 sm:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute right-[-10%] top-[24%] h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />
        </div>

        <header className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8 reveal-on-scroll">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
                Suraj Khar
              </h1>
              <p className="text-lg font-semibold text-white/90">Full Stack Developer & Technical Team Lead</p>
              <p className="typing-line text-base font-semibold text-cyan-100 sm:text-lg">
                {typedRole}
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-white/85">
              Full-stack developer with hands-on experience building production-ready systems using Java, Spring Boot, FastAPI, React, and PostgreSQL. Technical Team Lead at Pranayuv Technologies.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-150 hover:-translate-y-0.5 hover:bg-slate-100"
                href={links.resume}
                download
              >
                View Resume
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-white/20"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/40 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-100">{stat.label}</p>
                  <p className="mt-1 text-sm font-medium text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center reveal-on-scroll lg:justify-end">
            <div className="profile-ring h-80 w-80 rounded-full p-1.5">
              <img
                src="/profile.jpg"
                alt="Suraj Khar"
                className="h-full w-full rounded-full border-4 border-white/80 object-cover shadow-2xl"
              />
            </div>
          </div>
        </header>
      </section>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-10">
        <section className="grid gap-6 reveal-on-scroll" id="experience">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Experience</h2>
          <div className="grid gap-4">
            {experience.map((role) => (
              <article
                key={role.company}
                className="relative rounded-xl border border-blue-200 bg-blue-50 px-6 py-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md card-accent card-draw-in"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-slate-900">{role.role}</h3>
                    <p className="text-sm font-medium text-blue-700">{role.company}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{role.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {role.bullets.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 reveal-on-scroll" id="projects">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              (() => {
                const isFeatured = featuredProjectNames.has(project.name);
                return (
              <article
                key={project.name}
                className={`relative group flex h-full flex-col justify-between gap-4 rounded-xl border bg-blue-50 px-6 py-6 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md card-accent card-draw-in ${
                  isFeatured
                    ? "featured-project border-blue-400 md:scale-[1.02]"
                    : "border-blue-200 hover:border-blue-300"
                }`}
              >
                {isFeatured && (
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-violet-600 via-sky-500 to-teal-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    Featured
                  </span>
                )}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    <span>{project.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                  <p className="text-sm text-slate-700">{project.description}</p>
                  <p className="text-xs font-medium text-blue-700">{project.tech}</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.live && project.live !== "#" && (
                    <a
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:bg-blue-700 hover:-translate-y-0.5"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                  <a
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition-all duration-150 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
              );
            })()
            ))}
          </div>
        </section>

        <section className="grid gap-6 reveal-on-scroll" id="skills">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <article
                key={group.label}
                className="relative rounded-xl border border-blue-200 bg-blue-50 px-5 py-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md card-accent card-draw-in"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border border-white/30 bg-gradient-to-r px-3 py-1.5 text-sm font-semibold text-white shadow-sm ${
                        skillCategoryGradients[index % skillCategoryGradients.length]
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 reveal-on-scroll" id="education">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Education</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <article
                key={`${item.title}-${item.detail}`}
                className="relative rounded-xl border border-blue-200 bg-blue-50 px-5 py-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md card-accent card-draw-in"
              >
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm font-medium text-blue-700">{item.org}</p>
                <div className="mt-2 flex items-center justify-between text-sm text-slate-700">
                  <span>{item.detail}</span>
                  {item.period && <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">{item.period}</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 reveal-on-scroll" id="certifications">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Certifications</h2>
          <div className="relative rounded-xl border border-blue-200 bg-blue-50 px-6 py-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md card-accent card-draw-in">
            <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {certifications.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-4 reveal-on-scroll" id="contact">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Contact</h2>
          <div className="relative rounded-xl border border-blue-200 bg-blue-50 px-6 py-8 text-center transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md card-accent card-draw-in">
            <p className="text-base text-slate-700">
              Let’s build something great together. I respond quickly to thoughtful outreach.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
              <a
                className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-all duration-150 hover:bg-blue-700 hover:-translate-y-0.5"
                href={links.email}
              >
                surajkhaar@gmail.com
              </a>
              <a
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-900 transition-all duration-150 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
                href={links.phone}
              >
                +91 70516 57685
              </a>
              <a
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-900 transition-all duration-150 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-900 transition-all duration-150 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 px-6 py-6 backdrop-blur-sm sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Suraj Khar. All rights reserved.</p>
          <div className="flex items-center gap-4 font-medium">
            <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-blue-700">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700">
              LinkedIn
            </a>
            <a href={links.email} className="hover:text-blue-700">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
