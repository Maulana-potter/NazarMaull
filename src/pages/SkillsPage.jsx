import ThemeToggle from "@/components/ThemeToggle";
import StarBackGround from "@/components/StarBackGround";
import Navbar from "@/components/Navbar";
import SkillsSection from "../components/SkillsSection";
import Footer from "@/components/Footer";
import PageHeader from "../components/PageHeader";

const SkillsPage = () => {
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
          judul="Keahlian "
          deskripsi="Ini loh skill aku yang ga seberapa itu "
          halamanSaatIni="Skill"
        />
        <SkillsSection />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default SkillsPage;
