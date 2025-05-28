import ThemeToggle from "@/components/ThemeToggle";
import StarBackGround from "@/components/StarBackGround";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* theme toggle */}
        <ThemeToggle />

        {/* background effects */}
        <StarBackGround />

        {/* navbar */}
        <Navbar />

        {/* main content */}
        <main>
          {/* Section paling atas */}
          <PageHeader
            judul="TENTANG SAYA"
            deskripsi="Yuk kenal lebih dekat sama perjalanan aku di dunia coding dengan skil pas-pasan"
            halamanSaatIni="Tentang"
          />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
        </main>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
