import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPages from "./pages/ContactPages";

const App = () => {
  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Skills" element={<SkillsPage />} />
          <Route path="/Projects" element={<ProjectPage />} />
          <Route path="/Contact" element={<ContactPages />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
