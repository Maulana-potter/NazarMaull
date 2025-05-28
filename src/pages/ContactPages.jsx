import ThemeToggle from "@/components/ThemeToggle";
import StarBackGround from "@/components/StarBackGround";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";

const ContactPages = () => {
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
          judul="Kontak Aku"
          deskripsi="Kalau apa jangan apa kali yakan "
          halamanSaatIni="Kontak"
        />
        <ContactSection />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ContactPages;
