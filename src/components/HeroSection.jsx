import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className=" container relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Bagian Kiri: Teks */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">HI, I'M</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Nazar
            </span>{" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-1">
              Maulana
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-muted-foreground opacity-0 animate-fade-in-delay-2">
            Just a tech enthusiast from UMSU who enjoys building web stuff that
            works and looks good.
          </p>

          <div>
            <a
              href="#projects"
              className="cosmic-button opacity-0 animate-fade-in-delay-3"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Bagian Kanan: Gambar */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/FotoProfil.jpg"
            alt="Nazar Maulana"
            className="w-64 h-64 object-cover rounded-full shadow-lg opacity-0 animate-fade-in-delay-2"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
