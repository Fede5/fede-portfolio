import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProjectPage from "../projects/ProjectPage";
import Contact from "./Contact";
import ThankYou from "./ThankYou";

export default function App() {
  return (
<div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<ThankYou />} />
      </Routes>
    </div>
  );
}
