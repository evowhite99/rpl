export default function VideojuegosSection({ onBack }) {
  // Desestructurando la prop onBack
  const gamesCol = [
    { name: "Demon's Souls" },
    { name: "Ender Lilies: Quietus of the Knights" },
    { name: "Doom Eternal" },
    { name: "Need For Speed Underground 2" },
    { name: "Final Fantasy XVI" },
    { name: "Burnout Paradise" },
    { name: "Gran Turismo 7" },
    { name: "Wipeout Omega Collection" },
    { name: "Grand Theft Auto Vice City" },
    { name: "Bloodstained Ritual of the Night" },
    { name: "Gran Turismo 3" },
    { name: "Need For Speed Hot Pursuit" },
    { name: "Rayman" },
    { name: "Nier Replicant ver.1.22474487139..." },
    { name: "Tomba! 2" },
    { name: "Drakengard 3" },
    { name: "Hotline Miami 2 Wrong Number" },
    { name: "A hat in time" },
    { name: "Need For Speed Pro Street" },
    { name: "Metal Gear Solid 3 Snake Eater" },
    { name: "Burnout 3 Takedown" },
    { name: "Castlevania Symphony of the Night" },
    { name: "Castlevania Dawn of Sorrow" },
    { name: "Oddworld Soulstorm" },
    { name: "Dreams PS4" },
    { name: "Jak X" },
    { name: "Wreckfest" },
    { name: "Ratchet & Clank 3 Up your Arsenal" },
    { name: "Resistance 3" },
    { name: "Shadow of the Tomb Raider" },
  ];

  return (
    <div className="text-lg text-center  lg:pb-32">
      <button
        className="hover:bg-red-700 fixed left-0 ml-52 mt-3"
        onClick={onBack} // Aquí se llama correctamente a la función onBack
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
          zIndex: 10,
        }}
      >
        Volver
      </button>
      <div className=" text-2xl font-extrabold italic pt-5">
        Videojuegos recomendados
      </div>
      <div className="flex flex-col min-h-screen justify-between">
        <div className="mt-10 grid lg:grid-cols-2 grid-cols-2 text-left bg-cyan-900 bg-opacity-30 lg:w-7/12 w-11/12 mx-auto pl-10 rounded-3xl pb-5">
          {gamesCol.map((game) => (
            <div
              key={game.name}
              className="mt-5 lg:pl-5 lg:pr-5 font-lilita outlineHeader lg:text-xl text-sm  text-yellow-400 dark:text-blue-500 lg:w-auto w-11/12 flex justify-start items-start"
            >
              <span className="text-white">{game.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
