import { ArrowDown } from "lucide-react";

const PageHeader = ({ judul, deskripsi, halamanSaatIni }) => {
  return (
    <section className="container relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        {/* Header Content */}
        <div className="space-y-8 text-center">
          {/* Breadcrumb - jika bukan halaman utama */}
          {halamanSaatIni && (
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground opacity-0 animate-fade-in">
              <span>Beranda</span>
              <span>•</span>
              <span className="text-primary font-medium">{halamanSaatIni}</span>
            </div>
          )}

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
              <span className="text-gradient">{judul}</span>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto opacity-0 animate-fade-in-delay-2">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {deskripsi ||
                "Mahasiswa UMSU yang suka ngoding dan bikin website keren. Seneng banget eksplorasi teknologi baru!"}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-muted-foreground mb-2 text-sm">Gulir</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default PageHeader;
