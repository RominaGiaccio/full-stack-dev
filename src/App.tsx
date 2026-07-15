const projects = [
  {
    title: "Metria AI",
    description:
      "Plataforma de datos con inteligencia artificial que permite a usuarios consultar información de negocio en lenguaje natural y visualizar resultados mediante dashboards, gráficos y reportes.",
    role: "Full Stack Developer",
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "AI"],
  },
  {
    title: "Bollek",
    description:
      "Sistema de gestión de stock para empresas uruguayas, con control de movimientos, proveedores, órdenes, alertas y reportes.",
    role: "Full Stack Developer Freelance",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind"],
  },
  {
  title: "Modyra: Personal Project",
  description:
    "Modyra is a work-in-progress mobile-first daily check-in app to track mood, energy, habits and personal notes, built as a full stack project with React and FastAPI.",
  role: "Full Stack Developer",
  stack: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
},
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Tailwind",
  "Git",
  "GitHub",
  "Vite",
  "AI Products",
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Agregado: navbar simple para navegar por la página */}
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-tight">
            Romina Giaccio
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Agregado: sección principal de presentación */}
      <section id="home" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Full Stack Developer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            I build web applications with React, Python and AI-powered products.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I’m a Systems Engineer from Uruguay, focused on building clean,
            functional and scalable web products that combine user interfaces,
            data visualization and backend logic.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              View projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-slate-400"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      {/* Agregado: sección sobre mí */}
      <section id="about" className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold">About me</h2>
          </div>

          <div className="space-y-6 text-slate-300">
            <p>
              I’m a Full Stack Developer with experience building web products
              using React, TypeScript, Python, FastAPI and PostgreSQL. I enjoy
              working on products that solve real business problems through
              clear interfaces, useful data and practical AI features.
            </p>

            <p>
              My current focus is improving my full stack profile while growing
              in frontend development, backend fundamentals and AI-powered
              product development.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agregado: sección de proyectos */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold">Featured work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20"
            >
              <p className="mb-3 text-sm text-cyan-400">{project.role}</p>

              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Agregado: sección de contacto */}
      <section id="contact" className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold">Let’s connect</h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            I’m open to Full Stack, Frontend and Python Developer opportunities,
            especially in teams building useful products with modern web
            technologies and AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Email me
            </a>

            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-slate-400"
            >
              LinkedIn
            </a>

            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-slate-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Agregado: footer simple */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Romina Giaccio. Built with React, Vite and Tailwind.
      </footer>
    </main>
  );
}

export default App;