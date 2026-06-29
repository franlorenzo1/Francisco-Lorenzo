const technicalSkills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'React', level: 70 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Python', level: 55 },
];

const softSkills = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Adaptabilidad y flexibilidad',
  'Resolución de problemas',
  'Creatividad e innovación',
  'Autoaprendizaje',
];

export default function Skills() {
  return (
    <section className="mt-30 px-4 sm:px-6 font-mono">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-extrabold tracking-widest text-sAqua">
          &gt; HABILIDADES_TÉCNICAS
        </h2>
        <div className="mt-6 space-y-4 text-left">
          {technicalSkills.map(({ name, level }) => (
            <div key={name}>
              <div className="flex justify-between text-sm mb-1">
                <span>&gt; {name}</span>
                <span className="text-sAqua">{level}%</span>
              </div>
              <div className="h-2 w-full rounded-full border border-sAqua/40 bg-petalF/40 overflow-hidden">
                <div
                  className="h-full rounded-full bg-sAqua shadow-[0_0_8px_#4cc9f0] transition-all duration-700"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 max-w-2xl mx-auto text-center">
        <h2 className="font-extrabold tracking-widest text-nPink">
          &gt; HABILIDADES_BLANDAS
        </h2>
        <ul
          className="
            font-bold
            mt-5
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            mx-auto
            px-4 sm:px-6">
          {softSkills.map((skill) => (
            skill === 'Comunicación efectiva' ? (
              <li
                key={skill}
                className="border border-nPink rounded p-2 text-sm transition duration-300 hover:bg-nPink hover:text-white hover:drop-shadow-[0_0_10px_#f72585]"
              >
                [ COMUNICACIÓN
                <br />
                efectiva ]
              </li>
            ) : (
              <li
                key={skill}
                className="border border-nPink rounded p-2 text-sm transition duration-300 hover:bg-nPink hover:text-white hover:drop-shadow-[0_0_10px_#f72585]"
              >
                [ {skill.toUpperCase()} ]
              </li>
            )
          ))}
        </ul>
      </div>
    </section>
  );
}
