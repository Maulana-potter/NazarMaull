import { GraduationCap, Book } from "lucide-react";

const educationData = [
  {
    year: "2023 - Sekarang",
    title: "Sarjana (S1)",
    major: "Sistem Informasi",
    university: "Universitas Muhammadiyah Sumatera Utara",
  },
  {
    year: "2020 - 2023",
    title: "Sekolah Menengah Kejuruan (SMK)",
    major: "Rekayasa Perangkat Lunak",
    university: "SMK Tunas Pelita",
  },
  {
    year: "2017 - 2020",
    title: "Sekolah Menengah Pertama (SMP)",
    major: "",
    university: "SMPN 2 Medan",
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Pendidikan
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Perjalanan akademik yang membentuk ketertarikan saya pada teknologi
            dan inovasi
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="text-foreground w-8 h-8" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-2xl p-6 border-2 gradient-border h5 transition-all duration-300  card-hover">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary/50 rounded-full text-sm font-medium">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-1">
                    <Book className="w-4 h-4 text-foreground" />
                    <p className="text-foreground">
                      {item.major && (
                        <span className="font-semibold text-foreground">
                          {item.major}
                        </span>
                      )}
                      {item.major && " • "}
                      <span className="text-foreground">{item.university}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
