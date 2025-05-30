import React, { useState } from "react";
import {
  ChevronDown,
  User,
  GraduationCap,
  BookOpen,
  Briefcase,
  Code,
  Mail,
} from "lucide-react";

const faqData = [
  {
    question: "Siapa aku dan latar belakang pendidikanku?",
    answer:
      "Aku mahasiswa Sistem Informasi di UMSU. Lagi fokus ngulik dunia IT, terutama soal pengembangan sistem dan analisis data. Seru banget deh!",
    icon: User,
  },
  {
    question: "Lagi belajar apa sih sekarang?",
    answer:
      "Lagi ngulik mata kuliah kayak Pemrograman, Basis Data, Analisis Sistem, Jaringan, sama Manajemen Proyek TI. Di luar kuliah, aku juga suka ikut kursus online biar makin jago.",
    icon: BookOpen,
  },
  {
    question: "Teknologi yang udah aku kuasai?",
    answer:
      "Aku udah cukup nyaman pakai HTML, CSS, JavaScript, dan React buat bikin web. Selain itu, aku juga belajar Arduino buat proyek elektronik, plus Figma & Canva buat desain UI/UX dan konten visual.",
    icon: Code,
  },
  {
    question: "Bisa kolaborasi bareng nggak?",
    answer:
      "Tentu bisa dong! Aku terbuka banget buat kolaborasi — entah itu buat tugas kuliah, freelance, atau proyek seru lainnya. Yuk bikin sesuatu bareng!",
    icon: Briefcase,
  },
  {
    question: "Gimana cara hubungi aku?",
    answer:
      "Gampang! Bisa lewat email atau DM di medsos. Aku senang ngobrol soal teknologi, kolaborasi proyek, atau sekadar sharing ide soal dunia IT.",
    icon: Mail,
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container relative min-h-screen flex items-center justify-center px-4 ">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
            <GraduationCap className="w-8 h-8 text-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">FAQ</h1>
          <p className=" text-lg max-w-2xl mx-auto text-foreground leading-relaxed">
            Mahasiswa Sistem Informasi yang antusias dalam dunia teknologi dan
            pengembangan software
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const IconComponent = item.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className=" rounded-xl border gradient-border card-hover transition-all duration-300"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-6  rounded-xl"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4">
                    <div className=" w-10 h-10  rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-lg text-medium text-foreground   pr-4">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-foreground" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-6">
                    <div className="pl-14 border-l-2 ">
                      <p className="text-foreground leading-relaxed pl-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* University Info */}
        <div className="mt-16 text-center">
          <div className=" rounded-xl p-8 shadow-sm border card-hover gradient-border">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Universitas Muhammadiyah Sumatera Utara
            </h3>
            <p className="text-foreground">Program Studi Sistem Informasi</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-foreground mb-4">
            Tertarik untuk berkolaborasi atau berdiskusi?
          </p>
          <div className="flex justify-center space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
