import { useState, useMemo, useCallback } from "react";
import React from "react";

function MusicaSection({ onBack }) {
  const festivalVideos = useMemo(
    () => ({
      "Dreambeach 2024": [
        "../videos/db2024-1.mp4",
        "../videos/db2024-2.mp4",
        "../videos/db2024-3.mp4",
        "../videos/db2024-4.mp4",
        "../videos/db2024-5.mp4",
        "../videos/db2024-6.mp4",
        "../videos/db2024-7.mp4",
        "../videos/db2024-8.mp4",
        "../videos/db2024-9.mp4",
        "../videos/db2024-10.mp4",
        "../videos/db2024-11.mp4",
        "../videos/db2024-12.mp4",
        "../videos/db2024-13.mp4",
        "../videos/db2024-14.mp4",
        "../videos/db2024-15.mp4",
      ],
      "Dreambeach 2023": [
        "../videos/db2023-1.mp4",
        "../videos/db2023-2.mp4",
        "../videos/db2023-3.mp4",
        "../videos/db2023-4.mp4",
        "../videos/db2023-5.mp4",
        "../videos/db2023-6.mp4",
        "../videos/db2023-7.mp4",
        "../videos/db2023-8.mp4",
        "../videos/db2023-9.mp4",
        "../videos/db2023-10.mp4",
      ],
      "Animal Sound 2022": [
        "../videos/am2022-8.mp4",
        "../videos/am2022-1.mp4",
        "../videos/am2022-2.mp4",
        "../videos/am2022-3.mp4",
        "../videos/am2022-4.mp4",
        "../videos/am2022-12.mp4",
        "../videos/am2022-5.mp4",
        "../videos/am2022-6.mp4",
        "../videos/am2022-7.mp4",
        "../videos/am2022-10.mp4",
        "../videos/am2022-11.mp4",
        "../videos/am2022-9.mp4",
      ],
    }),
    []
  );

  const musicCol = useMemo(
    () => [
      { name: "- Sullivan King" },
      { name: "- The Sherlocks" },
      { name: "- Illenium" },
      { name: "- Fytch" },
      { name: "- Don Broco" },
      { name: "- HEALTH" },
      { name: "- Borgore" },
      { name: "- Dirtyphonics" },
      { name: "- Modestep" },
      { name: "- Apashe" },
    ],
    []
  );

  const [selectedFestival, setSelectedFestival] = useState("Dreambeach 2024");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = festivalVideos[selectedFestival];

  const handleFestivalChange = useCallback((e) => {
    const newFestival = e.target.value;
    setSelectedFestival(newFestival);
    setCurrentVideoIndex(0); // Restablece el índice al cambiar de festival
  }, []);

  const handleNextVideo = useCallback(() => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentVideoIndex, videos.length]);

  const handlePreviousVideo = useCallback(() => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentVideoIndex]);

  return (
    <div className="text-lg text-center">
      <button
        className="hover:bg-red-400 hover:scale-125 duration-150 bg-red-700 fixed lg:left-0 lg:inset-x-auto lg:inset-y-auto right-0 bottom-0 lg:mr-0 mr-12 lg:top-0 lg:ml-52 lg:mt-6 mb-20 lg:animate-pulse"
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

      <div className="lg:text-2xl text-lg font-extrabold italic pt-6">
        Vídeos festivales
      </div>

      {/* Selector de festival */}
      <select
        value={selectedFestival}
        onChange={handleFestivalChange}
        className="mt-4 p-2 bg-gray-700 text-white rounded"
      >
        {Object.keys(festivalVideos).map((festival) => (
          <option key={festival} value={festival}>
            {festival}
          </option>
        ))}
      </select>

      <p className="mt-5 text-sm">
        (Click en el vídeo si no se reproduce automáticamente)
      </p>

      <div className="mt-5 flex justify-center items-center">
        <button
          onClick={handlePreviousVideo}
          disabled={currentVideoIndex === 0}
          className="mr-2 lg:mr-5 p-2 text-3xl text-white rounded duration-150 lg:scale-110 hover:lg:scale-150"
        >
          ⬅️
        </button>

        <video
          key={videos[currentVideoIndex]} // Forzar la recarga del video
          src={videos[currentVideoIndex]}
          controls
          autoPlay
          className="lg:w-1/5 lg:h-1/5 w-3/5 h-3/5 rounded-lg"
        />

        <button
          onClick={handleNextVideo}
          disabled={currentVideoIndex === videos.length - 1}
          className="ml-2 lg:ml-5 p-2 text-3xl text-white rounded duration-150 lg:scale-110 hover:lg:scale-150"
        >
          ➡️
        </button>
      </div>

      <div className="mt-10 lg:text-2xl text-lg font-extrabold italic pt-6">
        Música recomendada
        <p>(Rock, EDM, Indie...)</p>
      </div>
      <div className="justify-between">
        <div className="mt-6 grid lg:grid-cols-3 grid-cols-2 text-left bg-cyan-900 bg-opacity-30 lg:w-7/12 w-11/12 mx-auto pl-10 rounded-lg pb-10 pt-6">
          {musicCol.map((music) => (
            <div
              key={music.name}
              className="mt-5 lg:pl-5 lg:pr-5 font-lilita outlineHeader lg:text-xl text-sm text-yellow-400 dark:text-blue-500 lg:w-auto w-11/12 justify-start items-start"
            >
              <span className="text-white">{music.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(MusicaSection);
