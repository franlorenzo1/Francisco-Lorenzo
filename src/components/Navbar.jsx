

export default function Navbar() {



  return (
   <div className="fixed top-0 left-0 w-full flex justify-center z-50">
    <nav className="
    inline-block 
    bg-rPlum/20
    shadow-md 
    rounded-xl 
    px-4 py-2 mt-4 
    backdrop-blur-md">
    <ul className="flex gap-6 items-center justify-center">
      <li>
        <a href="#about" className="
        cursor-pointer 
        font-bold 
        text-nPink
        transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_#f72585]">
          SOBRE MI
        </a>
      </li>
      <li>
        <a href="#skills" className="cursor-pointer font-bold text-nPink hover:text-white transition">
        HABILIDADES
        </a>
      </li>
      <li>
        <a href="#projects" className="cursor-pointer font-bold text-nPink hover:text-white transition">
        PROYECTOS
        </a>
      </li>
    </ul>
    
    </nav>
    
    </div>
    );
}
