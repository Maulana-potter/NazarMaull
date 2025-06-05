import { Instagram } from "lucide-react";
import { ArrowUp, Twitter, Linkedin, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card relative  border-border mt-12 py-16 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
              Contact Info
            </h4>
            <div className="space-y-3">
              <a
                href="mailto: nazar555ava@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span> nazar555ava@gmail.com</span>
              </a>
              <a
                href="tel:+6281903128326"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span>+6281903128326</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
              Follow Me
            </h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://x.com/NazarMa60101679"
                aria-label="Twitter"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-nazar-maulana-a62298319/"
                aria-label="LinkedIn"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/nazarmaull/"
                aria-label="Instagram"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/Maulana-potter"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NazarMaulana. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group relative p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp
              size={20}
              className="transform group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
