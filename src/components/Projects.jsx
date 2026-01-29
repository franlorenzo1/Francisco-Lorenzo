import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";

export default function Projects() {
  const proyectos = [
    {
      titulo: "Fran.dev",
      descripcion: "Mi portfolio personal hecho con React y Tailwind CSS.",
      img: "/frandev.png",
      github: "https://github.com/franlorenzo1/Francisco-Lorenzo",
      link: "https://francisco-lorenzo.vercel.app/",
    },
    {
      titulo: "CiberSeguridad",
      descripcion: "Proyectos de ciberseguridad",
      img: "/ciberseguridad.png",
      github: "https://github.com/franlorenzo1/CyberSeguridad",
    },
  ];

  return (
    <section className="mt-20 text-center">
      <h2 className="font-extrabold text-2xl">PROYECTOS</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 justify-items-center list-none p-0">
        {proyectos.map((proyecto, index) => (
          <ProjectCard key={index} proyecto={proyecto} />
        ))}
      </ul>

      
      <p className="mt-12 font-semibold text-sAqua text-center opacity-70 italic">
         Estoy trabajando en nuevos proyectos...
      </p>
    </section>
  );
}

function ProjectCard({ proyecto }) {
  return (
    <li className="bg-sAqua border border-sAqua p-4 rounded-xl w-80 shadow-lg">
      <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
        <img
          src={proyecto.img}
          alt={proyecto.titulo}
          className="
            mb-4 w-full 
            rounded-xl 
            transition-transform 
            duration-200 
            hover:scale-105 
            drop-shadow-[0_0_15px_#4cc9f0]
          "
        />
      </a>

      <p className="font-bold">{proyecto.descripcion}</p>

      <div className="flex justify-center gap-4 mt-3">
        <a
          href={proyecto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-110"
        >
          <MarkGithubIcon size={24} />
        </a>

        {proyecto.link && (
          <a
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <LinkIcon size={24} />
          </a>
        )}
      </div>
    </li>
  );
}
