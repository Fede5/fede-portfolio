import { useParams, Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const projects = [
  {
    id: "avd-automation",
    title: "AVD Deployment Automation",
    description: "Automate Azure Virtual Desktop deployment using Bicep and PowerShell.",
    technologies: ["Azure", "AVD", "PowerShell"],
    language: "bicep",
    code: `param location string = resourceGroup().location
param hostpoolName string = 'my-avd-hostpool'

resource hostpool 'Microsoft.DesktopVirtualization/hostPools@2022-02-10-preview' = {
  name: hostpoolName
  location: location
  properties: {
    hostPoolType: 'Pooled'
    preferredAppGroupType: 'Desktop'
  }
}`
  },
  {
    id: "zero-trust",
    title: "Zero Trust Landing Zone",
    description: "Conditional Access, Intune baseline, secure identity using PowerShell and Graph API.",
    technologies: ["Azure", "Intune", "PowerShell"],
    language: "powershell",
    code: `Connect-MSGraph
New-IntunePolicy -Name "Baseline" -Configuration { ... }
Set-AzureADConditionalAccessPolicy -PolicyName "ZeroTrust" -Enable $true`
  },
  {
    id: "cloud-cost-dashboard",
    title: "Cloud Cost Optimization Dashboard",
    description: "Simulated dashboard built with React and Chart.js to visualize Azure cost data.",
    technologies: ["React", "Chart.js"],
    language: "javascript",
    code: `const data = [
  { name: 'VMs', cost: 120 },
  { name: 'Storage', cost: 80 }
];`
  },
  {
    id: "hybrid-identity",
    title: "Hybrid Identity Setup with Azure AD Connect",
    description: "Set up sync between on-prem AD and Azure AD with HA configuration.",
    technologies: ["Azure", "ActiveDirectory"],
    language: "powershell",
    code: `Install-Module -Name ADSync
Start-ADSyncSyncCycle -PolicyType Delta`
  },
  {
    id: "golden-image-benchmark",
    title: "Golden Image Benchmark Automation",
    description: "PowerShell scripts to benchmark AVD golden images across regions.",
    technologies: ["AVD", "PowerShell"],
    language: "powershell",
    code: `Measure-Command { Start-AVDSession -Image 'W10-Golden' }`
  },
  {
    id: "hybrid-user-deactivation",
    title: "Hybrid User Deactivation Workflow",
    description: "Logic App and Automation Account to offboard hybrid users from AD + Entra.",
    technologies: ["Azure", "Automation", "ActiveDirectory"],
    language: "yaml",
    code: `steps:
  - name: Disable user in Active Directory
    run: |
      Disable-ADAccount -Identity $user

  - name: Remove user from Azure AD groups
    run: |
      Remove-AzADGroupMember -GroupObjectId $group -MemberId $user`
  }
];

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const dark = document.documentElement.classList.contains("dark");

  if (!project) {
    return (
      <div className="p-6">
        <p className="text-slate-600 dark:text-slate-300 text-sm">Project not found.</p>
        <Link to="/" className="text-indigo-600 underline">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Link to="/" className="text-indigo-600 underline">← Back to Projects</Link>
      <h1 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">{project.title}</h1>
      <p className="text-slate-600 dark:text-slate-300">{project.description}</p>

      <div>
        <h2 className="font-semibold text-slate-800 dark:text-slate-200">Technologies Used:</h2>
        <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      {project.code && (
        <div>
          <h2 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Example Code:</h2>
          <SyntaxHighlighter
            language={project.language}
            style={dark ? materialDark : prism}
            customStyle={{
              padding: "1rem",
              borderRadius: "0.5rem",
              fontSize: "0.9rem"
            }}
          >
            {project.code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
