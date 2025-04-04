import { Link } from "react-router-dom";

const projects = [
  {
    id: "avd-automation",
    title: "AVD Deployment Automation with Bicep",
    description: "Automated Azure Virtual Desktop deployment using Bicep and PowerShell.",
  },
  {
    id: "zero-trust",
    title: "Zero Trust Landing Zone for Microsoft 365",
    description: "Modern, secure cloud foundation using Azure AD and Conditional Access.",
  },
  {
    id: "cloud-cost-dashboard",
    title: "Cloud Cost Optimization Dashboard",
    description: "Dashboard that visualizes cloud spending and optimizations.",
  },
  {
    id: "hybrid-identity",
    title: "Hybrid Identity Setup with Azure AD Connect",
    description: "Sync on-prem and cloud identities with high availability setup.",
  },
  {
    id: "golden-image",
    title: "Golden Image Performance Benchmark Automation",
    description: "Scripted performance benchmarking for AVD golden images.",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-indigo-700">Harry Federico Argote Carrasco</h1>
        <p className="text-lg text-slate-600">Senior Cloud Engineer | Azure Specialist</p>
        <p className="text-sm text-slate-500">Bella Vista, Buenos Aires, Argentina</p>
        <div className="pt-4">
          <a
            href={`${import.meta.env.BASE_URL}Harry_Argote_Portfolio_CV.pdf`}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            Download CV (PDF)
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <Link
              key={proj.id}
              to={`/projects/${proj.id}`}
              className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-indigo-700">{proj.title}</h2>
              <p className="text-slate-600 text-sm mt-2">{proj.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}