import ThemeToggle from "@/components/ThemeToggle";
import StarBackGround from "@/components/StarBackGround";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "@/components/Footer";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* theme toggle */}
      <ThemeToggle />

      {/* background effects */}
      <StarBackGround />

      {/* navbar */}
      <Navbar />
      {/* main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Faq />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
