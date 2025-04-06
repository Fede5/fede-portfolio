const projects = [
  {
    id: "avd-deployment",
    title: "AVD Deployment Automation",
    description: "Automate Azure Virtual Desktop deployment using Bicep, PowerShell and CI/CD pipelines.",
    technologies: ["Azure", "Bicep", "PowerShell", "DevOps"],
    github: "https://github.com/Fede5/avd-deployment"
  },
  {
    id: "zero-trust-landing-zone",
    title: "Zero Trust Landing Zone",
    description: "Secure-by-default M365 and Entra ID configuration using CA, Intune, Graph and hardening.",
    technologies: ["Microsoft 365", "Entra ID", "PowerShell"],
    github: "https://github.com/Fede5/zero-trust-landing-zone"
  },
  {
    id: "hybrid-user-deactivation",
    title: "Hybrid User Deactivation",
    description: "Automated offboarding for hybrid users across AD and Entra ID using Logic Apps.",
    technologies: ["Azure", "Automation", "Logic App", "PowerShell"],
    github: "https://github.com/Fede5/hybrid-user-deactivation"
  },
  {
    id: "avd-CICD",
    title: "AVD Host Image Update CICD",
    description: "Deploy new AVD hosts with latest golden image and phased validation pipelines.",
    technologies: ["Azure DevOps", "Bicep", "AVD", "Pipelines"],
    github: "https://github.com/Fede5/avd-CICD"
  },
  {
    id: "cloud-cost-dashboard",
    title: "Cloud Cost Optimization Dashboard",
    description: "Simulated cost dashboard using React and Chart.js to visualize Azure costs.",
    technologies: ["React", "Chart.js", "JavaScript"],
    github: ""
  },
  {
    id: "golden-image-benchmark",
    title: "Golden Image Benchmark",
    description: "Automated benchmarking scripts for AVD golden images across Azure regions.",
    technologies: ["PowerShell", "Azure"],
    github: ""
  }
];

export default projects;