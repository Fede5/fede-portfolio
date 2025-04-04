import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProjectPage from "../projects/ProjectPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
  );
}