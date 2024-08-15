import { useState } from "react";

export default function VideojuegosSection({ onBack }) {
  // Desestructurando la prop onBack
  const gamesCol = [
    { name: "Demon's Souls", image: "../images/demonssouls.jpg" },
    {
      name: "Ender Lilies: Quietus of the Knights",
      image: "../images/enderlilies.jpg",
    },
    { name: "A hat in time", image: "../images/ahatintime.jpeg" },
    { name: "Doom Eternal", image: "../images/doometernal.jpg" },

    { name: "Final Fantasy XVI", image: "../images/ffxvi.jpg" },
    { name: "Burnout Paradise", image: "../images/burnoutparadise.jpg" },
    { name: "Gran Turismo 7", image: "../images/granturismo7.jpg" },
    { name: "Wipeout Omega Collection", image: "../images/wipeout.jpg" },

    {
      name: "Bloodstained Ritual of the Night",
      image: "../images/bloodstained.jpg",
    },

    {
      name: "Need For Speed Hot Pursuit",
      image: "../images/nfshotpursuit.jpg",
    },
    { name: "Rayman", image: "../images/rayman.jpg" },
    {
      name: "Nier Replicant ver.1.22474487139...",
      image: "../images/nierreplicant.jpg",
    },
    { name: "Tomba! 2", image: "../images/tomba2!.png" },
    { name: "Drakengard 3", image: "../images/drakengard3.jpg" },
    {
      name: "Hotline Miami 1 + 2 Wrong Number",
      image: "../images/hotlinemiami.jpg",
    },

    { name: "Need For Speed Pro Street", image: "../images/nfsprostreet.jpg" },
    {
      name: "Metal Gear Solid 3 Snake Eater",
      image: "../images/mgs3.webp",
    },
    { name: "Burnout 3 Takedown", image: "../images/burnout3.jpg" },
    {
      name: "Castlevania Symphony of the Night",
      image: "../images/castlevaniasotn.webp",
    },
    {
      name: "Castlevania Dawn of Sorrow",
      image: "../images/castlevaniados.jpg",
    },
    { name: "Oddworld Soulstorm", image: "../images/oddworld.jpg" },
    { name: "Dreams PS4", image: "../images/dreams.jpg" },
    { name: "Jak X", image: "../images/jakx.jpg" },
    { name: "Wreckfest", image: "../images/wreckfest.jpg" },
    {
      name: "Ratchet & Clank 3 Up your Arsenal",
      image: "../images/ratchet3.jpg",
    },
  ];

  // Estado para controlar cuántas imágenes mostrar
  const [visibleGames, setVisibleGames] = useState(10);

  const handleLoadMore = () => {
    setVisibleGames((prevVisibleGames) => prevVisibleGames + 10);
  };

  return (
    <div className="text-lg text-center ">
      <button
        className="hover:bg-red-400 hover:scale-125 duration-150 bg-red-700 fixed lg:left-0 lg:inset-x-auto lg:inset-y-auto right-0 bottom-0 lg:mr-0 mr-12 lg:top-0 lg:ml-52 lg:mt-6 mb-20 lg:animate-pulse animate-bounce"
        onClick={onBack}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
          zIndex: 50,
        }}
      >
        Volver
      </button>
      <div className="lg:text-2xl text-lg font-extrabold italic pt-6 ">
        Videojuegos recomendados
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-left bg-cyan-900 bg-opacity-30 lg:w-7/12 w-11/12 mx-auto p-3 rounded-3xl pb-5 lg:mb-10 mb-2">
        {gamesCol.slice(0, visibleGames).map((game) => (
          <div key={game.name} className="relative">
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-0 left-0 bg-opacity-75 bg-black text-white text-sm p-2 rounded-t-lg">
              {game.name}
            </span>
          </div>
        ))}
      </div>
      {visibleGames < gamesCol.length && (
        <button
          onClick={handleLoadMore}
          className="mt-10 mr-40 lg:mr-0 px-6 py-3 bg-green-500 text-white rounded-lg duration-300  animate-bounce justify-start items-start relative"
        >
          Cargar más
        </button>
      )}
    </div>
  );
}
