

export default function Skills() {
  return (
    <section className="mt-30 text-center">
      <div>
        <h2 className="font-extrabold">HABILIDADES TÉCNICAS</h2>
        <ul
          className="
            font-bold 
            mt-5 
            grid 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-4 
            mx-auto 
            max-w-2xl 
            px-4 sm:px-6">
          <li className="border border-sAqua rounded p-2 transition duration-300 hover:bg-sAqua hover:text-black hover:drop-shadow-[0_0_10px_#4cc9f0]">
            HTML
          </li>
          <li className="border border-sAqua rounded p-2 transition duration-300 hover:bg-sAqua hover:text-black hover:drop-shadow-[0_0_10px_#4cc9f0]">
            CSS
          </li>
          <li className="border border-sAqua rounded p-2 transition duration-300 hover:bg-sAqua hover:text-black hover:drop-shadow-[0_0_10px_#4cc9f0]">
            React
          </li>
          <li className="border border-sAqua rounded p-2 transition duration-300 hover:bg-sAqua hover:text-black hover:drop-shadow-[0_0_10px_#4cc9f0]">
            Tailwind
          </li>
          <li className="border border-sAqua rounded p-2 transition duration-300 hover:bg-sAqua hover:text-black hover:drop-shadow-[0_0_10px_#4cc9f0]">
            Python
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="font-extrabold">HABILIDADES BLANDAS</h2>
        <ul
          className="
            font-bold 
            mt-5 
            grid 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-4 
            mx-auto 
            max-w-2xl 
            px-4 sm:px-6">
          <li className="border border-nPink rounded p-2 transition duration-300 hover:bg-nPink hover:text-white hover:drop-shadow-[0_0_10px_#f72585]">
            TRABAJO EN EQUIPO
          </li>
          <li className="border border-nPink rounded p-2 transition duration-300 hover:bg-nPink hover:text-white hover:drop-shadow-[0_0_10px_#f72585]">
            COMUNICACIÓN EFECTIVA
          </li>
          <li className="border border-nPink rounded p-2 transition duration-300 hover:bg-nPink hover:text-white hover:drop-shadow-[0_0_10px_#f72585]">
            ADAPTABILIDAD Y FLEXIBILIDAD
          </li>
          <li className="border border-nPink rounded p-2 transition duration-300 hover:bg-nPink hover:text-white hover:drop-shadow-[0_0_10px_#f72585]">
            RESOLUCIÓN DE PROBLEMAS
          </li>
          <li className="border border-nPink rounded p-2 transition duration-300 hover:bg-nPink hover:text-white hover:drop-shadow-[0_0_10px_#f72585]">
            CREATIVIDAD E INNOVACIÓN
          </li>
        </ul>
      </div>
    </section>
  );
}