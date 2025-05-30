import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experienceData = [
  {
    period: "2024",
    position: "Peserta",
    company: "Kampus Merdeka - Wirausaha Merdeka",
    location: "Indonesia",
    type: "Program",
    description:
      "Berpartisipasi dalam program pengembangan kewirausahaan yang berfokus pada pembangunan keterampilan bisnis dan pola pikir inovatif. Mempelajari tentang ekosistem startup dan pengembangan bisnis.",
    technologies: [
      "Perencanaan Bisnis",
      "Riset Pasar",
      "Pemasaran Digital",
      "Perencanaan Keuangan",
    ],
    achievements: [
      "Menyelesaikan pelatihan kewirausahaan",
      "Membuat proposal dan presentasi bisnis",
      "Mendapatkan wawasan tentang ekosistem startup",
    ],
  },
  {
    period: "2023 - Sekarang",
    position: "Anggota Aktif",
    company: "Himpunan Mahasiswa Sistem Informasi",
    location: "UMSU, Medan",
    type: "Organisasi",
    description:
      "Aktif dalam kegiatan himpunan mahasiswa, berkontribusi dalam program akademik dan sosial. Terlibat dalam penyelenggaraan acara serta mendukung sesama mahasiswa.",
    technologies: [
      "Kepemimpinan",
      "Manajemen Acara",
      "Kerja Tim",
      "Komunikasi",
    ],
    achievements: [
      "Menyelenggarakan workshop dan seminar mahasiswa",
      "Bekerja sama dalam berbagai kegiatan jurusan",
      "Membangun relasi dengan mahasiswa lain",
    ],
  },
  {
    period: "2020 - 2023",
    position: "Anggota",
    company: "OSIS SMK Tunas Pelita",
    location: "Medan, Sumatera Utara",
    type: "Organisasi",
    description:
      "Berpartisipasi dalam kegiatan OSIS selama masa sekolah menengah. Membantu menyelenggarakan acara sekolah dan mewakili aspirasi siswa dalam berbagai program sekolah.",
    technologies: [
      "Kepemimpinan",
      "Organisasi Acara",
      "Public Speaking",
      "Pemecahan Masalah",
    ],
    achievements: [
      "Berhasil menyelenggarakan acara budaya sekolah",
      "Mewakili siswa dalam rapat sekolah",
      "Mengembangkan keterampilan kepemimpinan dan komunikasi",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Ini Perjalanan yang sudah aku tempuh
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>

            {experienceData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start gap-6 mb-16 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="text-foreground w-8 h-8" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1  rounded-2xl p-8 border-1 border-primary  transition-all duration-300 card-hover">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {item.position}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.type === "Program"
                              ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                              : item.type === "Organization"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : "bg-green-500/20 text-green-400 border border-green-500/30"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-foreground" />
                          <span className="font-semibold">{item.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-foreground" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 lg:mt-0">
                      <Calendar className="w-4 h-4 text-foreground" />
                      <span className="px-4 py-2 bg-primary/50 rounded-full text-sm font-medium text-foreground">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Skills Developed:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-foreground rounded-md text-sm border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Achievements:
                    </h4>
                    <div className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
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

export default ExperienceSection;
