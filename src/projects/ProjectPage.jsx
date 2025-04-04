import { useParams, Link } from "react-router-dom";

const projectDetails = {
  "avd-automation": {
    title: "AVD Deployment Automation with Bicep",
    description: "Infrastructure as Code project for deploying a full Azure Virtual Desktop environment using Bicep and PowerShell.",
    technologies: ["Azure", "AVD", "Bicep", "PowerShell", "FSLogix"],
    steps: [
      "Define host pool, app group, and workspace in a Bicep template.",
      "Automate publishing of the app group using PowerShell.",
      "Integrate FSLogix profiles with Azure Files or Azure NetApp Files.",
    ],
    github: "https://github.com/Fede5/avd-deployment",
  },
  "zero-trust": {
    title: "Zero Trust Landing Zone for Microsoft 365",
    description: "A secure-by-default environment leveraging Conditional Access, Intune security baselines, and Microsoft Graph automation.",
    technologies: ["Azure AD", "Microsoft 365", "Conditional Access", "Intune", "Graph API"],
    steps: [
      "Block legacy authentication using Conditional Access policies.",
      "Deploy Intune secure baselines using Graph API and PowerShell.",
      "Define user and device compliance policies aligned with Zero Trust.",
    ],
    github: "https://github.com/Fede5/zero-trust-landing-zone",
  },
  "cloud-cost-dashboard": {
    title: "Cloud Cost Optimization Dashboard",
    description: "Custom dashboard simulating Azure cost data using mock APIs. Helps identify overspending resources and track budgets.",
    technologies: ["Azure Cost Management", "React", "Chart.js", "Mock API"],
  },
  "hybrid-identity": {
    title: "Hybrid Identity Setup with Azure AD Connect",
    description: "Demonstrates identity sync setup between on-premises AD and Azure AD, with high availability and staging mode explained.",
    technologies: ["Azure AD Connect", "Active Directory", "Hybrid Identity"],
  },
  "golden-image": {
    title: "Golden Image Performance Benchmark Automation",
    description: "Script that runs performance benchmarks between different golden images in AVD, comparing metrics and sending alerts.",
    technologies: ["AVD", "PowerShell", "Monitoring", "Automation"],
  },
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <div className="p-6">Project not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Link to="/" className="text-indigo-600 hover:underline">&larr; Back to Projects</Link>
      <h1 className="text-3xl font-bold text-indigo-700">{project.title}</h1>
      <p className="text-slate-700">{project.description}</p>

      {project.technologies && (
        <div>
          <h2 className="text-lg font-semibold mt-4">Technologies Used:</h2>
          <ul className="list-disc list-inside text-slate-600">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {project.steps && (
        <div>
          <h2 className="text-lg font-semibold mt-4">Implementation Highlights:</h2>
          <ul className="list-disc list-inside text-slate-600">
            {project.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      )}

      {project.github && (
        <div className="pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 text-sm underline hover:text-indigo-800"
          >
            View on GitHub →
          </a>
        </div>
      )}
    </div>
  );
}
