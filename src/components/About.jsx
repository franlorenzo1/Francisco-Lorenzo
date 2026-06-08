import { useState } from 'react';

function TerminalHeader({ label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b border-sAqua/30 bg-mViolet/70">
      <span className="size-2.5 rounded-full bg-rPlum" />
      <span className="size-2.5 rounded-full bg-nPink" />
      <span className="size-2.5 rounded-full bg-sAqua" />
      <span className="ml-2 text-xs text-sAqua/80">{label}</span>
    </div>
  );
}

export default function About() {

  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const DURATION = 300;

  const handleOpen = () => {
    setOpen(true);
    setClosing(false);
  };
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, DURATION);
  }

  return (
    <section className="flex
                       flex-col
                       md:flex-row
                       justify-center
                       items-center
                       pt-7 px-1.5 mt-10
                       gap-3.5">
      <div className="max-w-md
                    w-full
                    order-2
                    text-left
                    font-mono">

        <div className="mt-10 md:mt-24 rounded-lg border border-sAqua/40 bg-petalF/60 shadow-[0_0_25px_rgba(76,201,240,0.2)] overflow-hidden">
          <TerminalHeader label="guest@portfolio:~" />
          <div className="p-5 text-sm leading-relaxed">
            <p className="text-sAqua">
              <span className="text-nPink">guest@portfolio</span>:~$ whoami
            </p>
            <p className="mt-1 mb-4 font-bold text-white typewriter">
              FRONT-END_DEVELOPER
            </p>
            <p className="text-mauveShoadow font-bold">
              Desarrollador Web Front-End.
              Habiendo completado el plan de estudios de mi tecnicatura, busco sumarme a un equipo tecnológico
              donde aportar valor con mis conocimientos en React y seguir expandiendo mis habilidades.
            </p>
            <button
              onClick={handleOpen}
              className="mt-5 px-6 py-2
                         bg-rPlum
                         text-white
                         font-bold
                         hover:text-white
                         cursor-pointer
                         rounded-lg
                         hover:bg-nPink
                         transition duration-300
                         hover:drop-shadow-[0_0_10px_#f72585]">
              $ cat sobre_mi.txt
            </button>
          </div>
        </div>

        {open && (
          <div
            className={`fixed
                inset-0
                backdrop-blur-md
                bg-opacity-50
                flex
                items-center
                justify-center
                ${closing ? "animate-overlay-out" : "animate-overlay-in"}
                z-50`}
            onClick={handleClose}>

            <div
              className={`bg-petalF
                  border border-sAqua/40
                  font-mono
                  text-left
                  rounded-lg
                  shadow-xl
                  max-w-md
                  w-full
                  overflow-hidden
                  drop-shadow-[0_0_35px_rgba(76,201,240,0.35)]
                  ${closing ? "animate-fade-out" : "animate-fade-in"}`}
              onClick={(e) => e.stopPropagation()}>

              <TerminalHeader label="sobre_mi.txt" />
              <div className="p-5 text-sm leading-relaxed">
                <p className="text-mauveShoadow">
                  Egresado de la Tecnicatura Universitaria en Programación (UTN FRM), actualmente finalizando
                  el proyecto de tesis final. Cuento con una sólida formación en lógica de programación, estructuras
                  de datos y desarrollo web de componentes.
                  <br /><br />
                  Con la cursada concluida, dispongo de plena disponibilidad horaria para afrontar desafíos
                  laborales e integrarme a proyectos de tiempo completo.
                </p>

                <button
                  onClick={handleClose}
                  className="mt-4 px-4 py-2
                     cursor-pointer
                     rounded-lg
                     font-bold
                     bg-rPlum
                     text-white
                     hover:bg-nPink transition">
                  $ exit
                </button>
              </div>
            </div>
          </div>
        )}


      </div>
      <div className="max-w-md w-full order-1 flex justify-center">
        <img src="/yo.jpeg"
          alt=""
          className="
      rounded-lg
      size-96
      drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] "/>
      </div>
    </section>

  );
}
