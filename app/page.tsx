const experience = [
  {
    role: "Software Developer Intern",
    company: "Pranayuv Technologies",
    period: "Oct 2025 – Jan 2026",
    bullets: [
      "Contributed to the backend development of an internal enterprise management application using Spring Boot and PostgreSQL",
      "Designed and implemented backend workflows with clearly defined state transitions and validation rules",
      "Built transaction-safe business logic to maintain data consistency across multiple system operations",
      "Developed and tested REST APIs to support core application modules and data flows",
      "Collaborated on frontend integration, implementing UI components and connecting them to backend services",
      "Debugged and resolved database integrity issues including foreign key constraints, enums, and sequence handling",
      "Performed end-to-end API testing and delivered production-ready code through version control",
    ],
  },
];

const projects = [
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
  {
    name: "Tic Tac Toe (Minimax)",
    period: "Jun 2023 – Jul 2023",
    description: "Classic game with minimax-based AI for optimal play.",
    tech: "JavaScript · Algorithms",
    live: "#",
    code: "https://github.com/surajkhaar",
  },
];

const skills = [
  { label: "Languages", items: ["Java", "Python", "SQL"] },
  { label: "Backend & APIs", items: ["Spring Boot", "FastAPI", "REST"] },
  { label: "Web", items: ["HTML", "CSS", "JavaScript"] },
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
    detail: "CGPA: 7.6 / 10",
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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-50 blur-[140px] opacity-40" />
        <div className="absolute right-[-8%] top-[24%] h-96 w-96 rounded-full bg-blue-100 blur-[180px] opacity-30" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
        <header className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl">
                Suraj Khar
              </h1>
              <p className="text-lg font-semibold text-blue-600">
                Software Developer
              </p>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-slate-600">
              Backend-focused developer with hands-on experience building
              production-ready systems using Java, Spring Boot, PostgreSQL,
              and REST APIs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-blue-700 hover:-translate-y-0.5"
                href={links.resume}
                download
              >
                View Resume
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-150 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/profile.jpg"
              alt="Suraj Khar"
              className="h-80 w-80 rounded-xl border border-slate-200 object-cover shadow-lg"
            />
          </div>
        </header>

        <section className="grid gap-6" id="experience">
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

        <section className="grid gap-6" id="projects">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="relative group flex h-full flex-col justify-between gap-4 rounded-xl border border-blue-200 bg-blue-50 px-6 py-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md card-accent card-draw-in"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    <span>{project.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                  <p className="text-sm text-slate-700">{project.description}</p>
                  <p className="text-xs font-medium text-blue-700">{project.tech}</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.name === "AI Resume Screening Agent" && (
                    <a
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:bg-blue-700 hover:-translate-y-0.5"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
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
            ))}
          </div>
        </section>

        <section className="grid gap-6" id="skills">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
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
                      className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-900 border border-blue-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6" id="education">
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

        <section className="grid gap-6" id="certifications">
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

        <section className="grid gap-4" id="contact">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Contact</h2>
          <div className="relative rounded-xl border border-blue-200 bg-blue-50 px-6 py-8 text-center transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md card-accent card-draw-in">
            <p className="text-base text-slate-700">
              Let’s collaborate on reliable backends, APIs, and production-ready features. I respond quickly to thoughtful outreach.
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
    </div>
  );
}
