import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">Harry Federico Argote Carrasco</h1>
        <p className="text-slate-700 dark:text-slate-300">
          Senior Cloud Engineer · Azure Specialist · VDI & Modern Workplace Expert
        </p>
        <a
          href="/fede-portfolio/Harry_Argote_Portfolio_CV.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Download CV (PDF)
        </a>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm bg-white dark:bg-slate-800"
            >
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center mt-4">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-sm text-indigo-600 underline"
                >
                  View Details →
                </Link>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 dark:text-slate-300 underline"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
