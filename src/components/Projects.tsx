import * as motion from "motion/react-client"


const projects = [
  {
    title: "Landing Page Moderno",
    image: "/project1.jpg", // Reemplaza por tu imagen real
    description: "Landing page responsiva con animaciones y SEO optimizado.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Motion.dev"],
    link: "https://demo1.com",
  },
  {
    title: "Dashboard Admin",
    image: "/project2.jpg",
    description: "Panel de administración con gráficos y gestión de usuarios.",
    tech: ["React", "Shadcn/ui", "Chart.js"],
    link: "https://demo2.com",
  },
  // Agrega más proyectos aquí
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-10 sm:py-16 px-2 sm:px-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Proyectos</h2>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 transition-all flex flex-col h-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-2 text-sm sm:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-xs sm:text-sm mt-auto"
              >
                Ver proyecto
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
