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
      titulo: "Control-Personal",
      descripcion: "Aplicación de escritorio para la gestión de tareas, hábitos y objetivos personales. Incluye estadísticas de progreso, planificación diaria y seguimiento de productividad en tiempo real.",
      img: "/control-personal.png",
      github: "https://github.com/franlorenzo1/control-personal",

    },



  ];

  return (
    <section className="mt-20 text-center font-mono">
      <h2 className="font-extrabold text-2xl tracking-widest text-sAqua">
        &gt; PROYECTOS
      </h2>

      <ul className="flex flex-wrap justify-center gap-8 mt-10 list-none p-0">
        {proyectos.map((proyecto, index) => (
          <ProjectCard key={index} proyecto={proyecto} />
        ))}
      </ul>


      <p className="mt-12 font-semibold text-sAqua text-center opacity-70 italic">
        // Estoy trabajando en nuevos proyectos...
      </p>
    </section>
  );
}

function ProjectCard({ proyecto }) {
  return (
    <li
      className="
        w-80
        text-left
        rounded-lg
        overflow-hidden
        border border-sAqua/40
        bg-petalF/60
        shadow-[0_0_18px_rgba(76,201,240,0.15)]
        transition duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_25px_rgba(76,201,240,0.4)]
      ">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-sAqua/30 bg-mViolet/70">
        <span className="size-2.5 rounded-full bg-rPlum" />
        <span className="size-2.5 rounded-full bg-nPink" />
        <span className="size-2.5 rounded-full bg-sAqua" />
        <span className="ml-2 text-xs text-sAqua/80 truncate">
          {proyecto.titulo.toLowerCase().replace(/\s+/g, "_")}.project
        </span>
      </div>

      <a
        href={proyecto.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
      >
        <img
          src={proyecto.img}
          alt={proyecto.titulo}
          className="w-full transition-transform duration-300 hover:scale-105"
        />
      </a>

      <div className="p-4">
        <p className="text-sAqua font-bold">&gt; {proyecto.titulo}</p>
        <p className="mt-1 text-sm text-mauveShoadow font-bold">
          {proyecto.descripcion}
        </p>

        <div className="flex gap-3 mt-4 text-sm">
          <a
            href={proyecto.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5
              px-3 py-1.5
              rounded border border-sAqua/40
              text-sAqua font-bold
              transition duration-300
              hover:bg-sAqua hover:text-black
              hover:drop-shadow-[0_0_10px_#4cc9f0]
            "
          >
            <MarkGithubIcon size={16} /> code
          </a>

          {proyecto.link && (
            <a
              href={proyecto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5
                px-3 py-1.5
                rounded border border-nPink/40
                text-nPink font-bold
                transition duration-300
                hover:bg-nPink hover:text-white
                hover:drop-shadow-[0_0_10px_#f72585]
              "
            >
              <LinkIcon size={16} /> demo
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
