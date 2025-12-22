import { useState } from 'react';


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
                    text-center">
      
      <p className="py-3.5 mt-10
                    md:mt-24
                    text-mauveShoadow
                    font-bold">
        Buscando mi primer experiencia laboral en el mundo de la programación, 
        con preferienca en el desarrollo web front-end, estoy abierto a aprender nuevas tecnologias
        u otros lenguajes de programación.
      </p>
      <button
          onClick={handleOpen}
          className="px-6 py-2
                     bg-rPlum
                     text-white
                     font-bold
                     hover:text-white
                     cursor-pointer
                     rounded-lg
                     hover:bg-nPink
                     transition duration-300
                     hover:drop-shadow-[0_0_10px_#f72585]">
          ¡Conoceme más!
          
        </button>
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
                  p-6 
                  rounded-lg 
                  shadow-xl 
                  max-w-md 
                  w-full 
                  text-center 
                  drop-shadow-[0_0_35px_rgba(255,255,255,0.5)] 
                  ${closing ? "animate-fade-out" : "animate-fade-in"}`}
      onClick={(e) => e.stopPropagation()}>

      <p className="mb-4">
        Estudiante de la tecnicatura universitaria en programación en la Universidad Tecnologica Nacional de Mendoza,
        me queda el ultimo semestre para terminarla y el mismo los empiezo a cursar en marzo del 2026.
        En mi tiempo libre, me gusta ir a entrenar al gimnasio, jugar videojuegos y ver series o peliculas.
      </p>
      
      <button
        onClick={handleClose}
        className="px-4 py-2
                   cursor-pointer
                   rounded-lg
                   font-bold
                   bg-rPlum
                   text-white 
                   hover:bg-nPink transition">
        Cerrar
      </button>
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
