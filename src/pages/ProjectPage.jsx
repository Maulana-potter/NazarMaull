import ThemeToggle from "@/components/ThemeToggle";
import StarBackGround from "@/components/StarBackGround";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "../components/PageHeader";
import ProjectsSection from "../components/ProjectsSection";

const ProjectPage = () => {
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
        <PageHeader
          judul="Proyek"
          deskripsi="Liat-liat deh hasil karya gue! Ada beberapa project keren yang udah gue bikin pake teknologi terbaru."
          halamanSaatIni="Proyek"
        />
        <ProjectsSection />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ProjectPage;
