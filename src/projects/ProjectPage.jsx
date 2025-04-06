import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import powershell from "react-syntax-highlighter/dist/esm/languages/hljs/powershell";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ExternalLink } from "lucide-react";

SyntaxHighlighter.registerLanguage("powershell", powershell);

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div className="p-4">Project not found.</div>;

  const renderContentWithCode = (content) => {
    const codeRegex = /```(\w+)\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0, match;
    while ((match = codeRegex.exec(content)) !== null) {
      const [fullMatch, lang, code] = match;
      const index = match.index;
      if (index > lastIndex) {
        parts.push(<p key={lastIndex} className="mb-4 whitespace-pre-line">{content.slice(lastIndex, index).trim()}</p>);
      }
      parts.push(
        <SyntaxHighlighter key={index} language={lang} style={github} className="rounded-xl text-sm">
          {code.trim()}
        </SyntaxHighlighter>
      );
      lastIndex = index + fullMatch.length;
    }
    if (lastIndex < content.length) {
      parts.push(<p key={lastIndex + 1} className="mt-4 whitespace-pre-line">{content.slice(lastIndex).trim()}</p>);
    }
    return parts;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <a href="/" className="text-sm text-indigo-400 hover:underline block mb-6">← Back to Projects</a>
      <h1 className="text-2xl font-bold text-indigo-400 mb-2">{project.title}</h1>
      <p className="mb-4 text-zinc-300 dark:text-zinc-200">{project.description}</p>
      <div className="mb-6">
        <h2 className="font-semibold text-zinc-300 dark:text-zinc-100">Technologies Used:</h2>
        <ul className="list-disc list-inside text-zinc-300 dark:text-zinc-200">
          {project.technologies.map((tech) => (<li key={tech}>{tech}</li>))}
        </ul>
      </div>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-400 hover:underline mb-6">
          <ExternalLink size={16} /> View on GitHub
        </a>
      )}
      <div className="prose prose-invert max-w-none">{renderContentWithCode(project.content)}</div>
    </div>
  );
}