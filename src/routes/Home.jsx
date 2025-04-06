import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, Cloud, Terminal, Laptop, Shield, BarChart3, Users, Send, Moon, Sun } from "lucide-react";

const techIcons = {
  Azure: <Cloud size={14} />,
  AVD: <Laptop size={14} />,
  PowerShell: <Terminal size={14} />,
  Intune: <Shield size={14} />,
  React: <Laptop size={14} />,
  "Chart.js": <BarChart3 size={14} />,
  Automation: <Terminal size={14} />,
  ActiveDirectory: <Users size={14} />
};

const projects = [
  {
    id: "avd-automation",
    title: "AVD Deployment Automation",
    description: "Automated AVD deployment using Bicep and PowerShell.",
    technologies: ["Azure", "AVD", "PowerShell"]
  },
  {
    id: "zero-trust",
    title: "Zero Trust Landing Zone",
    description: "Conditional Access and Intune baselines with Graph automation.",
    technologies: ["Azure", "Intune", "PowerShell"]
  },
  {
    id: "cloud-cost-dashboard",
    title: "Cloud Cost Optimization Dashboard",
    description: "Simulated cloud cost dashboard using React and Chart.js.",
    technologies: ["React", "Chart.js"]
  },
  {
    id: "hybrid-identity",
    title: "Hybrid Identity Setup with Azure AD Connect",
    description: "High availability AD Connect with sync and monitoring.",
    technologies: ["Azure", "ActiveDirectory"]
  },
  {
    id: "golden-image-benchmark",
    title: "Golden Image Benchmark Automation",
    description: "Scripted performance testing across golden images.",
    technologies: ["AVD", "PowerShell"]
  },
  {
    id: "hybrid-user-deactivation",
    title: "Hybrid User Deactivation Workflow",
    description: "Automated user offboarding via Logic Apps & Automation.",
    technologies: ["Azure", "Automation", "ActiveDirectory"]
  }
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const techs = ["All", ...new Set(projects.flatMap(p => p.technologies))];
  const filtered = filter === "All" ? projects : projects.filter(p => p.technologies.includes(filter));

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-400">
          Harry Federico Argote Carrasco
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Senior Cloud Engineer | Azure Specialist
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Bella Vista, Buenos Aires, Argentina
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="/fede-portfolio/Harry_Argote_Portfolio_CV.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            <Download size={16} /> Download CV (PDF)
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 rounded-xl transition"
          >
            <Send size={16} /> Contact Me
          </Link>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4 text-center">Projects</h2>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {techs.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1 text-sm rounded-full border ${
                filter === t
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-slate-700 text-slate-700 dark:text-white border-slate-300 dark:border-slate-600"
              } hover:bg-indigo-100 dark:hover:bg-slate-600 transition`}
            >
              {techIcons[t]} {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6">
          {filtered.map(p => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition hover:scale-[1.01]"
            >
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">{p.description}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {p.technologies.map(t => (
                  <span
                    key={t}
                    className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full flex items-center gap-1"
                  >
                    {techIcons[t]} {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
