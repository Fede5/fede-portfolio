import { useParams, Link } from "react-router-dom";

const projectDetails = {
  "avd-automation": {
    title: "AVD Deployment Automation with Bicep",
    description: "Infrastructure as Code project for deploying an AVD environment using Bicep and PowerShell scripts, including host pool, session hosts, workspaces, and FSLogix integration.",
    technologies: ["Azure", "AVD", "Bicep", "PowerShell"],
  },
  "zero-trust": {
    title: "Zero Trust Landing Zone for Microsoft 365",
    description: "A foundational setup applying Zero Trust principles using Conditional Access, Intune, and Azure AD. Includes baseline policies and secure score optimization.",
    technologies: ["Azure AD", "Microsoft 365", "Conditional Access", "Intune"],
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
      <div>
        <h2 className="text-lg font-semibold mt-4">Technologies Used:</h2>
        <ul className="list-disc list-inside text-slate-600">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}