import { useState } from "react";
import { cn } from "@/lib/utils";

const Skills = [
  // Wirausaha & Bisnis
  { name: "Business Planning", level: 60, category: "entrepreneurship" },
  { name: "Financial Analysis", level: 50, category: "entrepreneurship" },
  { name: "Marketing Strategy", level: 75, category: "entrepreneurship" },
  { name: "Content Creation", level: 80, category: "entrepreneurship" },
  { name: "Video Editing (CapCut)", level: 70, category: "entrepreneurship" },
  { name: "Copywriting", level: 60, category: "entrepreneurship" },

  // Organisasi & Soft Skill
  { name: "Leadership", level: 85, category: "organization" },
  { name: "Teamwork", level: 90, category: "organization" },
  { name: "Public Speaking", level: 80, category: "organization" },
  { name: "Event Planning", level: 75, category: "organization" },
  { name: "Communication", level: 85, category: "organization" },

  // Tools & Aplikasi
  { name: "Canva", level: 85, category: "tools" },

  { name: "Microsoft Excel", level: 65, category: "tools" },
  { name: "Visual Studio Code", level: 80, category: "tools" },

  // Programming Dasar
  { name: "HTML", level: 90, category: "programming" },
  { name: "CSS", level: 85, category: "programming" },
  { name: "JavaScript", level: 75, category: "programming" },
  { name: "React", level: 50, category: "programming" },
  { name: "Tailwind CSS", level: 80, category: "programming" },
  { name: "Git", level: 70, category: "programming" },
];

const categories = [
  { id: "all", label: "Semua" },
  { id: "entrepreneurship", label: "Wirausaha" },
  { id: "organization", label: "Organisasi" },
  { id: "tools", label: "Tools" },
  { id: "programming", label: "Programming" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? Skills
      : Skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="skill-list">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter kategori */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                activeCategory === cat.id
                  ? "bg-primary text-white"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Daftar skill */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-primary rounded-full origin-left animate-[grow_1.5s_ease-in-out]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
