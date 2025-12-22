import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";

export default function Projects() {
  const proyectos = [
    {
      titulo: "Fran.dev",
      descripcion: "Mi portfolio personal hecho con React y Tailwind CSS.",
      img: "/fran.dev.png",
      github: "https://github.com/franlorenzo1",
      link: "https://franlorenzo1.vercel.app",
    },
    
   
  ];

  return (
    <section className="mt-20 text-center">
      <h2 className="font-extrabold">PROYECTOS</h2>

      {proyectos.length === 1 ? (
        <div className="flex justify-center mt-10">
          <ProjectCard proyecto={proyectos[0]} />
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 justify-items-center">
          {proyectos.map((proyecto, index) => (
            <ProjectCard key={index} proyecto={proyecto} />
          ))}
        </ul>
      )}
    </section>
  );
}

function ProjectCard({ proyecto }) {
  return (
<div>
  <ul className="flex justify-center mt-10 list-none">
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
          hover:scale-105 drop-shadow-[0_0_15px_#4cc9f0]
          size-55"/>
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
        <a
          href={proyecto.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-110"
          >
          <LinkIcon size={24} />
        </a>
      </div>
    </li>
  </ul>
  <p className="mt-8 font-semibold text-sAqua">
    ESTOY TRABAJANDO EN NUEVOS PROYECTOS...
  </p>
</div>
  );
}