import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SumutWay demo",
    description:
      "Latihan membuat Website Menggunakan TailWind dengan Membuat landing page dari produk p2mw saya ",
    image: "/Projects/Project1.png",
    tags: ["tailwindCss", "vercel"],
    demoUrl: "https://demo-sumutway.vercel.app/",
    githubUrl: "https://github.com/Maulana-potter/demoSumutway",
  },
  {
    id: 2,
    title: "Latihan Membuat website dengan Boostraps",
    description: "Latihan ini cuma untuk menghilangkan rasa gabut aja ",
    image: "/Projects/Project2.png",
    tags: ["Botsrap", "github"],
    demoUrl: "https://maulana-potter.github.io/LatihanBootstrap/",
    githubUrl: "https://github.com/Maulana-potter/LatihanBootstrap",
  },
  {
    id: 3,
    title: "List App ",
    description: "latihan Untuk membuat project react ",
    image: "/Projects/Project3.png",
    tags: ["react", "vercel"],
    demoUrl: "https://gocheck-blond.vercel.app/",
    githubUrl: "https://github.com/Maulana-potter/Gocheck",
  },
  {
    id: 4,
    title: "Simon Game Arduino  ",
    description: "Latihan membuat game sederhana menggunakan Arduino",
    image: "/Projects/Project4.jpg",
    tags: ["Arduino", "Game"],
    demoUrl: "https://youtube.com/shorts/zBAVkXWSmYg?feature=share",
    githubUrl: "https://github.com/Maulana-potter/SimonGameArduino-",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          {" "}
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ini beberapa project yang saya buat selama proses belajar. Sebagian
          besar dibuat buat latihan, nyobain hal baru, dan ngembangin skill
          pelan-pelan. Walau masih sederhana, project-project ini jadi bukti
          kalau saya terus berkembang dan nggak berhenti belajar!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 font-medium border bg-primary/20 rounded-full bg-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Maulana-potter"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            check My Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
