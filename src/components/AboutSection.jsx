import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-24 px-4 relative" id="konten">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 md:text-4xl text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Mahasiswa Sistem Informasi
            </h3>
            <p className="text-muted-foreground">
              Saya adalah mahasiswa Sistem Informasi di Universitas Muhammadiyah
              Sumatera Utara yang memiliki ketertarikan tinggi dalam
              pengembangan web dan desain antarmuka.
            </p>
            <p className="text-muted-foreground">
              Saya suka mempelajari teknologi baru, memecahkan masalah melalui
              logika pemrograman, dan menciptakan aplikasi yang bermanfaat dan
              menarik secara visual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="/cv-nazarmaulana.pdf"
                download
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="semi-bold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Membuat aplikasi web yang responsif dan mudah digunakan.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="semi-bold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Mendesain antarmuka yang intuitif dan menarik bagi pengguna.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="semi-bold text-lg">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Terlibat dalam berbagai proyek pengembangan dan desain
                    digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
