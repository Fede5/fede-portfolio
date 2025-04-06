import {
  FaCode,
  FaTerminal,
  FaCubes,
  FaServer
} from "react-icons/fa";

export const projects = [
  {
    slug: "avd-deployment",
    title: "AVD Deployment Automation",
    description: "Automated AVD deployment using Bicep and PowerShell.",
    technologies: ["Azure", "AVD", "Bicep", "PowerShell"],
    iconComponents: [FaCode, FaTerminal],
    github: "https://github.com/Fede5/avd-deployment",
    content: `Automate full Azure Virtual Desktop (AVD) environments using modular Bicep templates and an Azure DevOps pipeline.

**Technologies Used:**
- Bicep
- Azure DevOps
- YAML Pipeline
- Session Hosts Loop

**Example Code:**
\`\`\`bicep
module hostpool 'modules/hostpool.bicep' = {
  name: 'hostpool'
  params: {
    name: 'prod-avd-hp'
    location: location
  }
}
\`\`\`
    `,
  },
  {
    slug: "zero-trust-landing-zone",
    title: "Zero Trust Landing Zone for M365",
    description: "Secure M365 tenant baseline using Conditional Access & Intune.",
    technologies: ["Azure", "Intune", "Graph", "PowerShell"],
    iconComponents: [FaCode, FaTerminal],
    github: "https://github.com/Fede5/zero-trust-landing-zone",
    content: `Implements a secure baseline for Microsoft 365 tenants with Zero Trust principles using automation.

**Technologies Used:**
- Conditional Access
- Intune Baselines
- Microsoft Graph API
- PowerShell automation

**Example Code:**
\`\`\`powershell
Connect-MSGraph
New-DeviceCompliancePolicy -PlatformId windows10 ...
\`\`\`
    `,
  },
  {
    slug: "hybrid-user-deactivation",
    title: "Hybrid User Deactivation Workflow",
    description: "Automated offboarding of hybrid users via Logic Apps & PowerShell.",
    technologies: ["Azure", "Automation", "PowerShell", "Logic Apps"],
    iconComponents: [FaTerminal, FaServer],
    github: "https://github.com/Fede5/hybrid-user-deactivation",
    content: `Disables and cleans up hybrid user accounts (on-prem + Entra ID) using Logic Apps and PowerShell.

**Technologies Used:**
- Azure Automation
- Logic Apps
- PowerShell
- Entra ID

**Example Code:**
\`\`\`powershell
# Disable-EntraUser.ps1
Set-MgUser -UserId $userId -AccountEnabled:$false
Remove-MgUserAuthenticationMethod -UserId $userId -All
\`\`\`
    `,
  },
  {
    slug: "avd-cicd",
    title: "AVD Host CI/CD Update",
    description: "Update AVD session hosts on image change using CI/CD pipelines.",
    technologies: ["Azure", "DevOps", "AVD", "CI/CD"],
    iconComponents: [FaCubes, FaServer],
    github: "https://github.com/Fede5/avd-CICD",
    content: `Phased CI/CD deployment of new AVD hosts based on custom image updates.

**Technologies Used:**
- Azure Compute Gallery
- Phased rollouts (dev -> prod)
- Azure DevOps Pipelines

**Example Code:**
\`\`\`yaml
trigger:
  branches:
    include:
      - main
\`\`\`
    `,
  }
];