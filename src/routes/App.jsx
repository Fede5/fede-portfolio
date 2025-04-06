import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import ThankYou from "./ThankYou";
import ProjectPage from "../projects/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;