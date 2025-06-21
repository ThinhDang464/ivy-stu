import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>
    </div>
  );
};

export default App;
